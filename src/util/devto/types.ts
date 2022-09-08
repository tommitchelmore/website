type User = {
  name: string
  username: string
  twitter_username: string | null
  github_username: string | null
  website_url: string | null
  profile_image: string
  profile_image_90: string
}

type ArticleInfo = {
  type_of: 'article'
  id: number
  title: string
  description: string
  readable_publish_date: string
  slug: string
  path: string
  url: string
  comments_count: number
  public_reactions_count: number
  published_timestamp: string
  positive_reactions_count: number
  cover_image: string
  social_image: string
  canonical_url: string
  created_at: string
  edited_at: string | null
  crossposted_at: string | null
  published_at: string
  last_comment_at: string
  reading_time_minutes: number
  tag_list: string[]
  tags: string
  user: User
}

type Article = ArticleInfo & {
  body_html: string
}

export type { User, ArticleInfo, Article }
