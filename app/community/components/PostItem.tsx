'use client'

import { useCallback, useState } from 'react'
import { toggleUpvote, deletePost } from '../actions'
import type { PostWithAuthor } from '../types'
import { CommentThread } from './CommentThread'

interface PostItemProps {
  post: PostWithAuthor
  isUpvoted: boolean
  onUpvoteToggle: (postId: string, delta: number) => void
  onSolutionSet: (postId: string, commentId: string | null) => void
  isAdmin: boolean
  userId: string
}

export function PostItem({
  post,
  isUpvoted,
  onUpvoteToggle,
  onSolutionSet,
  isAdmin,
  userId,
}: PostItemProps) {
  const [showComments, setShowComments] = useState(false)
  const [deleteError, setDeleteError] = useState<string | null>(null)

  const handleUpvote = useCallback(async () => {
    const delta = isUpvoted ? -1 : 1
    onUpvoteToggle(post.id, delta)
    const result = await toggleUpvote(post.id)
    if (!result.success) {
      onUpvoteToggle(post.id, -delta)
      setDeleteError(result.error)
    }
  }, [post.id, isUpvoted, onUpvoteToggle])

  const handleDelete = useCallback(async () => {
    if (!confirm('Delete this post?')) return
    setDeleteError(null)
    const result = await deletePost(post.id)
    if (!result.success) setDeleteError(result.error)
  }, [post.id])

  const authorName = post.profiles?.display_name ?? 'Anonymous'
  const createdAt = new Date(post.created_at).toLocaleDateString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  return (
    <article
      className="rounded-lg border border-border bg-card p-4 shadow-sm"
      data-post-id={post.id}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <span className="inline-block rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            {post.category}
          </span>
          <h2 className="mt-1 text-lg font-semibold text-foreground">{post.title}</h2>
          <p className="mt-1 whitespace-pre-wrap text-sm text-muted-foreground">
            {post.content}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            {authorName} · {createdAt}
          </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <button
            type="button"
            onClick={handleUpvote}
            aria-label={isUpvoted ? 'Remove upvote' : 'Upvote'}
            className={`rounded p-2 focus:outline-none focus:ring-2 focus:ring-ring ${
              isUpvoted ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 2 2 0 00-2 2v4H4.333a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.56 18H6v-5.667z" />
            </svg>
          </button>
          <span className="text-sm font-medium text-foreground" aria-live="polite">
            {post.upvote_count}
          </span>
        </div>
      </div>
      {deleteError && (
        <p className="mt-2 text-sm text-destructive" role="alert">
          {deleteError}
        </p>
      )}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setShowComments((v) => !v)}
          className="rounded-md bg-muted px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {showComments ? 'Hide comments' : 'Comments'}
        </button>
        {isAdmin && (
          <button
            type="button"
            onClick={handleDelete}
            className="rounded-md bg-destructive/10 px-3 py-1.5 text-sm font-medium text-destructive hover:bg-destructive/20 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Delete post
          </button>
        )}
      </div>
      {showComments && (
        <CommentThread
          postId={post.id}
          category={post.category}
          authorId={post.user_id}
          solutionCommentId={post.solution_comment_id}
          onSolutionSet={onSolutionSet}
          userId={userId}
        />
      )}
    </article>
  )
}
