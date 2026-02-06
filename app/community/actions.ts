'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { COMMUNITY_CATEGORIES, type CommunityCategory } from './types'

const createPostSchema = z.object({
  title: z.string().min(1, 'Title is required').max(500),
  content: z.string().min(1, 'Content is required').max(10000),
  category: z.enum(COMMUNITY_CATEGORIES as unknown as [string, ...string[]]),
})

const addCommentSchema = z.object({
  post_id: z.string().uuid(),
  content: z.string().min(1, 'Comment is required').max(2000),
  parent_id: z.string().uuid().nullable(),
})

export async function createPost(formData: FormData) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const parsed = createPostSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
    category: formData.get('category'),
  })
  if (!parsed.success) {
    return { success: false as const, error: parsed.error.flatten().formErrors[0] ?? 'Invalid input' }
  }

  const { error } = await supabase.from('community_posts').insert({
    user_id: user.id,
    title: parsed.data.title,
    content: parsed.data.content,
    category: parsed.data.category as CommunityCategory,
  })
  if (error) {
    console.error('[community] createPost', error)
    return { success: false as const, error: error.message }
  }
  revalidatePath('/community')
  return { success: true as const }
}

export async function addComment(formData: FormData) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const parsed = addCommentSchema.safeParse({
    post_id: formData.get('post_id'),
    content: formData.get('content'),
    parent_id: formData.get('parent_id') || null,
  })
  if (!parsed.success) {
    return { success: false as const, error: parsed.error.flatten().formErrors[0] ?? 'Invalid input' }
  }

  const { error } = await supabase.from('community_comments').insert({
    post_id: parsed.data.post_id,
    user_id: user.id,
    parent_id: parsed.data.parent_id,
    content: parsed.data.content,
  })
  if (error) {
    console.error('[community] addComment', error)
    return { success: false as const, error: error.message }
  }
  revalidatePath('/community')
  return { success: true as const }
}

export async function toggleUpvote(postId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: existing } = await supabase
    .from('community_post_upvotes')
    .select('post_id')
    .eq('post_id', postId)
    .eq('user_id', user.id)
    .single()

  if (existing) {
    const { error } = await supabase
      .from('community_post_upvotes')
      .delete()
      .eq('post_id', postId)
      .eq('user_id', user.id)
    if (error) {
      console.error('[community] toggleUpvote remove', error)
      return { success: false as const, error: error.message }
    }
  } else {
    const { error } = await supabase.from('community_post_upvotes').insert({ post_id: postId, user_id: user.id })
    if (error) {
      console.error('[community] toggleUpvote add', error)
      return { success: false as const, error: error.message }
    }
  }
  revalidatePath('/community')
  return { success: true as const }
}

export async function setSolution(postId: string, commentId: string | null) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: post } = await supabase.from('community_posts').select('user_id, category').eq('id', postId).single()
  if (!post || post.user_id !== user.id) {
    return { success: false as const, error: 'Only the post author can set the solution' }
  }
  if (post.category !== 'Question') {
    return { success: false as const, error: 'Only Question posts can have a solution' }
  }

  const { error } = await supabase
    .from('community_posts')
    .update({ solution_comment_id: commentId, updated_at: new Date().toISOString() })
    .eq('id', postId)
  if (error) {
    console.error('[community] setSolution', error)
    return { success: false as const, error: error.message }
  }
  revalidatePath('/community')
  return { success: true as const }
}

export async function deletePost(postId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase.from('profiles').select('is_admin').eq('id', user.id).single()
  if (!profile?.is_admin) {
    return { success: false as const, error: 'Only admins can delete posts' }
  }

  const { error } = await supabase.from('community_posts').delete().eq('id', postId)
  if (error) {
    console.error('[community] deletePost', error)
    return { success: false as const, error: error.message }
  }
  revalidatePath('/community')
  return { success: true as const }
}
