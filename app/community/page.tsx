import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { CommunityContainer } from './components/CommunityContainer'
import type { PostWithAuthor } from './types'

export default async function CommunityPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: posts } = await supabase
    .from('community_posts')
    .select('id, user_id, title, content, category, upvote_count, solution_comment_id, created_at, updated_at')
    .order('created_at', { ascending: false })

  const userIds = [...new Set((posts ?? []).map((p) => p.user_id))]
  const { data: profiles } = await supabase
    .from('profiles')
    .select('id, display_name, is_admin')
    .in('id', userIds.length ? userIds : ['00000000-0000-0000-0000-000000000000'])

  const profileMap = new Map((profiles ?? []).map((pr) => [pr.id, pr]))
  const { data: upvoteRows } = await supabase
    .from('community_post_upvotes')
    .select('post_id')
    .eq('user_id', user.id)

  const { data: profile } = await supabase.from('profiles').select('is_admin').eq('id', user.id).single()

  const userUpvotePostIds = new Set((upvoteRows ?? []).map((r) => r.post_id))
  const initialPosts: PostWithAuthor[] = (posts ?? []).map((p) => ({
    ...p,
    profiles: profileMap.get(p.user_id) ?? null,
  }))

  return (
    <CommunityContainer
      initialPosts={initialPosts}
      userUpvotePostIds={Array.from(userUpvotePostIds)}
      isAdmin={profile?.is_admin ?? false}
      userId={user.id}
    />
  )
}
