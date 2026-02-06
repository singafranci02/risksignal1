'use client'

import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { createPost } from '../actions'
import { COMMUNITY_CATEGORIES, type CommunityCategory, type PostWithAuthor } from '../types'
import { PostItem } from './PostItem'

interface CommunityContainerProps {
  initialPosts: PostWithAuthor[]
  userUpvotePostIds: string[]
  isAdmin: boolean
  userId: string
}

export function CommunityContainer({
  initialPosts,
  userUpvotePostIds,
  isAdmin,
  userId,
}: CommunityContainerProps) {
  const [posts, setPosts] = useState<PostWithAuthor[]>(initialPosts)
  const [upvotedIds, setUpvotedIds] = useState<Set<string>>(new Set(userUpvotePostIds))
  const [category, setCategory] = useState<CommunityCategory | 'all'>('all')
  const [createError, setCreateError] = useState<string | null>(null)
  const [createSuccess, setCreateSuccess] = useState(false)

  const filteredPosts =
    category === 'all'
      ? posts
      : posts.filter((p) => p.category === category)

  const handleSolutionSet = useCallback((postId: string, commentId: string | null) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, solution_comment_id: commentId } : p))
    )
  }, [])

  const handleUpvoteOptimistic = useCallback((postId: string, delta: number) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId ? { ...p, upvote_count: p.upvote_count + delta } : p
      )
    )
    setUpvotedIds((prev) => {
      const next = new Set(prev)
      if (delta > 0) next.add(postId)
      else next.delete(postId)
      return next
    })
  }, [])

  useEffect(() => {
    const supabase = createClient()
    const channel = supabase
      .channel('community-posts-realtime')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'community_posts' },
        (payload) => {
          if (payload.eventType === 'INSERT' && payload.new) {
            const row = payload.new as Record<string, unknown>
            setPosts((prev) => [
              {
                id: row.id as string,
                user_id: row.user_id as string,
                title: row.title as string,
                content: row.content as string,
                category: row.category as CommunityCategory,
                upvote_count: (row.upvote_count as number) ?? 0,
                solution_comment_id: (row.solution_comment_id as string) ?? null,
                created_at: row.created_at as string,
                updated_at: row.updated_at as string,
                profiles: null,
              },
              ...prev,
            ])
          } else if (payload.eventType === 'UPDATE' && payload.new) {
            const row = payload.new as Record<string, unknown>
            setPosts((prev) =>
              prev.map((p) =>
                p.id === row.id
                  ? {
                      ...p,
                      upvote_count: (row.upvote_count as number) ?? p.upvote_count,
                      solution_comment_id: (row.solution_comment_id as string) ?? p.solution_comment_id,
                    }
                  : p
              )
            )
          } else if (payload.eventType === 'DELETE' && payload.old) {
            const row = payload.old as Record<string, unknown>
            setPosts((prev) => prev.filter((p) => p.id !== row.id))
          }
        }
      )
      .subscribe()
    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  async function handleCreatePost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setCreateError(null)
    setCreateSuccess(false)
    const form = e.currentTarget
    const formData = new FormData(form)
    const result = await createPost(formData)
    if (result.success) {
      setCreateSuccess(true)
      form.reset()
    } else {
      setCreateError(result.error)
    }
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-8">
      <h1 className="text-2xl font-semibold text-foreground">Community</h1>

      <form
        onSubmit={handleCreatePost}
        className="rounded-lg border border-border bg-card p-4 shadow-sm"
        aria-label="Create new post"
      >
        <h2 className="mb-3 text-sm font-medium text-foreground">New post</h2>
        <div className="space-y-3">
          <input
            type="text"
            name="title"
            placeholder="Title"
            required
            maxLength={500}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <textarea
            name="content"
            placeholder="Content"
            required
            maxLength={10000}
            rows={3}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <div className="flex flex-wrap items-center gap-3">
            <select
              name="category"
              required
              className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {COMMUNITY_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              Post
            </button>
          </div>
        </div>
        {createError && (
          <p className="mt-2 text-sm text-destructive" role="alert">
            {createError}
          </p>
        )}
        {createSuccess && (
          <p className="mt-2 text-sm text-green-600" role="status">
            Post created.
          </p>
        )}
      </form>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCategory('all')}
          className={`rounded-md px-3 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring ${
            category === 'all'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          All
        </button>
        {COMMUNITY_CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className={`rounded-md px-3 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring ${
              category === c
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="space-y-4" role="feed">
        {filteredPosts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            isUpvoted={upvotedIds.has(post.id)}
            onUpvoteToggle={handleUpvoteOptimistic}
            onSolutionSet={handleSolutionSet}
            isAdmin={isAdmin}
            userId={userId}
          />
        ))}
      </ul>
      {filteredPosts.length === 0 && (
        <p className="text-muted-foreground">No posts in this category yet.</p>
      )}
    </div>
  )
}
