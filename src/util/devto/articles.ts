import axios from 'axios'
import type { Article, ArticleInfo } from './types'

async function getArticles() {
  const res = await axios.get(
    `https://dev.to/api/articles?username=${import.meta.env.DEVTO_USERNAME}`
  )
  return res.data as ArticleInfo[]
}

async function getArticle(id: number) {
  const res = await axios.get(`https://dev.to/api/articles/${id}`)
  return res.data as Article
}

export { getArticles, getArticle }
