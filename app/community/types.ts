export const COMMUNITY_CATEGORIES = ['Question', 'Implementation Help', 'Policy Discussion'] as const
export type CommunityCategory = (typeof COMMUNITY_CATEGORIES)[number]

export interface Profile {
  id: string
  display_name: string | null
  is_admin: boolean
}

export interface CommunityPost {
  id: string
  user_id: string
  title: string
  content: string
  category: CommunityCategory
  upvote_count: number
  solution_comment_id: string | null
  created_at: string
  updated_at: string
  profiles: Profile | null
}

export interface CommunityComment {
  id: string
  post_id: string
  user_id: string
  parent_id: string | null
  content: string
  created_at: string
  profiles: Profile | null
}

export type PostWithAuthor = CommunityPost
