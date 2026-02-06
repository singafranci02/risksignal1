'use client'

import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { addComment, setSolution } from '../actions'
import type { CommunityCategory, CommunityComment } from '../types'

interface CommentThreadProps {
  postId: string
  category: CommunityCategory
  authorId: string
  solutionCommentId: string | null
  onSolutionSet: (postId: string, commentId: string | null) => void
  userId: string
}

function buildCommentTree(comments: CommunityComment[]) {
  const byId = new Map(comments.map((c) => [c.id, { ...c, children: [] as CommunityComment[] }]))
  const roots: CommunityComment[] = []
  for (const c of comments) {
    const node = byId.get(c.id)!
    if (!c.parent_id) {
      roots.push(node)
    } else {
      const parent = byId.get(c.parent_id)
      if (parent) (parent as { children: CommunityComment[] }).children.push(node)
      else roots.push(node)
    }
  }
  roots.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
  return roots
}

function CommentNode({
  comment,
  solutionCommentId,
  canMarkSolution,
  onMarkSolution,
  postId,
  userId,
  depth,
}: {
  comment: CommunityComment & { children?: CommunityComment[] }
  solutionCommentId: string | null
  canMarkSolution: boolean
  onMarkSolution: (commentId: string) => void
  postId: string
  userId: string
  depth: number
}) {
  const isSolution = solutionCommentId === comment.id
  const [replyOpen, setReplyOpen] = useState(false)
  const [replyContent, setReplyContent] = useState('')
  const [submitError, setSubmitError] = useState<string | null>(null)
  const children = (comment as { children?: CommunityComment[] }).children ?? []
  const authorName = comment.profiles?.display_name ?? 'Anonymous'
  const createdAt = new Date(comment.created_at).toLocaleDateString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  async function handleReply(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitError(null)
    const formData = new FormData()
    formData.set('post_id', postId)
    formData.set('content', replyContent)
    formData.set('parent_id', comment.id)
    const result = await addComment(formData)
    if (result.success) {
      setReplyContent('')
      setReplyOpen(false)
    } else {
      setSubmitError(result.error)
    }
  }

  return (
    <div
      className="border-l-2 border-muted pl-3"
      style={{ marginLeft: depth > 0 ? 12 : 0 }}
      data-comment-id={comment.id}
    >
      <div className="rounded bg-muted/50 p-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-foreground">{authorName}</span>
          <span className="text-xs text-muted-foreground">{createdAt}</span>
          {isSolution && (
            <span className="rounded bg-green-600/20 px-1.5 py-0.5 text-xs font-medium text-green-700 dark:text-green-400">
              Solution
            </span>
          )}
          {canMarkSolution && !isSolution && (
            <button
              type="button"
              onClick={() => onMarkSolution(comment.id)}
              className="text-xs font-medium text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring"
            >
              Mark as solution
            </button>
          )}
        </div>
        <p className="mt-1 whitespace-pre-wrap text-sm text-foreground">{comment.content}</p>
        {userId && (
          <button
            type="button"
            onClick={() => setReplyOpen((v) => !v)}
            className="mt-1 text-xs font-medium text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {replyOpen ? 'Cancel' : 'Reply'}
          </button>
        )}
      </div>
      {replyOpen && (
        <form onSubmit={handleReply} className="mt-2">
          <textarea
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            placeholder="Write a reply..."
            required
            maxLength={2000}
            rows={2}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <div className="mt-1 flex gap-2">
            <button
              type="submit"
              className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              Reply
            </button>
            <button
              type="button"
              onClick={() => setReplyOpen(false)}
              className="rounded-md bg-muted px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted/80"
            >
              Cancel
            </button>
          </div>
          {submitError && (
            <p className="mt-1 text-sm text-destructive" role="alert">
              {submitError}
            </p>
          )}
        </form>
      )}
      {children.length > 0 && (
        <div className="mt-2 space-y-2">
          {children.map((child) => (
            <CommentNode
              key={child.id}
              comment={child}
              solutionCommentId={solutionCommentId}
              canMarkSolution={false}
              onMarkSolution={onMarkSolution}
              postId={postId}
              userId={userId}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function CommentThread({
  postId,
  category,
  authorId,
  solutionCommentId,
  onSolutionSet,
  userId,
}: CommentThreadProps) {
  const [comments, setComments] = useState<CommunityComment[]>([])
  const [loading, setLoading] = useState(true)
  const [rootContent, setRootContent] = useState('')
  const [submitError, setSubmitError] = useState<string | null>(null)
  const canMarkSolution = category === 'Question' && authorId === userId

  const fetchComments = useCallback(async () => {
    const supabase = createClient()
    const { data: rows } = await supabase
      .from('community_comments')
      .select('id, post_id, user_id, parent_id, content, created_at')
      .eq('post_id', postId)
      .order('created_at', { ascending: true })
    const commentsList = rows ?? []
    const userIds = [...new Set(commentsList.map((c) => c.user_id))]
    const { data: profiles } = await supabase
      .from('profiles')
      .select('id, display_name, is_admin')
      .in('id', userIds.length ? userIds : ['00000000-0000-0000-0000-000000000000'])
    const profileMap = new Map((profiles ?? []).map((p) => [p.id, p]))
    const list: CommunityComment[] = commentsList.map((c) => ({
      ...c,
      profiles: profileMap.get(c.user_id) ?? null,
    }))
    setComments(list)
    setLoading(false)
  }, [postId])

  useEffect(() => {
    fetchComments()
  }, [fetchComments])

  useEffect(() => {
    const supabase = createClient()
    const channel = supabase
      .channel(`comments-${postId}`)
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'community_comments', filter: `post_id=eq.${postId}` },
        () => fetchComments()
      )
      .subscribe()
    return () => {
      supabase.removeChannel(channel)
    }
  }, [postId, fetchComments])

  async function handleRootSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitError(null)
    const formData = new FormData()
    formData.set('post_id', postId)
    formData.set('content', rootContent)
    formData.set('parent_id', '')
    const result = await addComment(formData)
    if (result.success) {
      setRootContent('')
      fetchComments()
    } else {
      setSubmitError(result.error)
    }
  }

  async function handleMarkSolution(commentId: string) {
    const result = await setSolution(postId, commentId)
    if (result.success) {
      onSolutionSet(postId, commentId)
    }
  }

  const tree = buildCommentTree(comments)

  return (
    <div className="mt-4 border-t border-border pt-4">
      <h3 className="text-sm font-medium text-foreground">Comments</h3>
      <form onSubmit={handleRootSubmit} className="mt-2">
        <textarea
          value={rootContent}
          onChange={(e) => setRootContent(e.target.value)}
          placeholder="Add a comment..."
          required
          maxLength={2000}
          rows={2}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <button
          type="submit"
          className="mt-2 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Comment
        </button>
        {submitError && (
          <p className="mt-1 text-sm text-destructive" role="alert">
            {submitError}
          </p>
        )}
      </form>
      {loading ? (
        <p className="mt-2 text-sm text-muted-foreground">Loading comments…</p>
      ) : (
        <ul className="mt-3 space-y-3">
          {tree.map((node) => (
            <CommentNode
              key={node.id}
              comment={node}
              solutionCommentId={solutionCommentId}
              canMarkSolution={canMarkSolution}
              onMarkSolution={handleMarkSolution}
              postId={postId}
              userId={userId}
              depth={0}
            />
          ))}
        </ul>
      )}
      {!loading && tree.length === 0 && (
        <p className="mt-2 text-sm text-muted-foreground">No comments yet.</p>
      )}
    </div>
  )
}
