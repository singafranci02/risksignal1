-- Community: profiles (extends auth.users for display + admin)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  is_admin BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Profiles are viewable by everyone"
  ON public.profiles FOR SELECT USING (true);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Ensure is_admin exists (e.g. if profiles was created elsewhere)
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS is_admin BOOLEAN NOT NULL DEFAULT false;

-- Auto-create profile on signup (optional trigger; can be handled in app)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Community posts
CREATE TABLE IF NOT EXISTS public.community_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('Question', 'Implementation Help', 'Policy Discussion')),
  upvote_count INTEGER NOT NULL DEFAULT 0,
  solution_comment_id UUID,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone authenticated can read posts"
  ON public.community_posts FOR SELECT
  TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert own posts"
  ON public.community_posts FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Authors can update own posts"
  ON public.community_posts FOR UPDATE
  TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Authors and admins can delete posts"
  ON public.community_posts FOR DELETE
  TO authenticated USING (
    auth.uid() = user_id
    OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = true)
  );

CREATE INDEX IF NOT EXISTS idx_community_posts_user_id ON public.community_posts(user_id);
CREATE INDEX IF NOT EXISTS idx_community_posts_category ON public.community_posts(category);
CREATE INDEX IF NOT EXISTS idx_community_posts_created_at ON public.community_posts(created_at DESC);

-- Community comments (threaded via parent_id)
CREATE TABLE IF NOT EXISTS public.community_comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID NOT NULL REFERENCES public.community_posts(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  parent_id UUID REFERENCES public.community_comments(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.community_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated can read comments"
  ON public.community_comments FOR SELECT
  TO authenticated USING (true);

CREATE POLICY "Authenticated can insert comments"
  ON public.community_comments FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_community_comments_post_id ON public.community_comments(post_id);
CREATE INDEX IF NOT EXISTS idx_community_comments_parent_id ON public.community_comments(parent_id);

ALTER TABLE public.community_posts
  ADD CONSTRAINT fk_solution_comment
  FOREIGN KEY (solution_comment_id) REFERENCES public.community_comments(id) ON DELETE SET NULL;

-- Post upvotes (for accurate count + optimistic toggle)
CREATE TABLE IF NOT EXISTS public.community_post_upvotes (
  post_id UUID NOT NULL REFERENCES public.community_posts(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (post_id, user_id)
);

ALTER TABLE public.community_post_upvotes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated can read upvotes"
  ON public.community_post_upvotes FOR SELECT
  TO authenticated USING (true);

CREATE POLICY "Authenticated can insert own upvote"
  ON public.community_post_upvotes FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own upvote"
  ON public.community_post_upvotes FOR DELETE
  TO authenticated USING (auth.uid() = user_id);

-- Trigger: keep community_posts.upvote_count in sync
CREATE OR REPLACE FUNCTION public.sync_post_upvote_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE public.community_posts SET upvote_count = upvote_count + 1 WHERE id = NEW.post_id;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE public.community_posts SET upvote_count = GREATEST(0, upvote_count - 1) WHERE id = OLD.post_id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS sync_upvote_count ON public.community_post_upvotes;
CREATE TRIGGER sync_upvote_count
  AFTER INSERT OR DELETE ON public.community_post_upvotes
  FOR EACH ROW EXECUTE FUNCTION public.sync_post_upvote_count();

-- Realtime: enable for community_posts and community_post_upvotes (upvote_count changes via trigger)
ALTER PUBLICATION supabase_realtime ADD TABLE public.community_posts;
