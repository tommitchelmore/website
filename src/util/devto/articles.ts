import AxiosInstance from '@util/axios'
import type { Article, ArticleInfo } from './types'

async function getArticles() {
  const res = await AxiosInstance.get(`https://dev.to/api/articles/me`, {
    headers: {
      'api-key': import.meta.env.DEVTO_API_KEY,
    },
  })
  return res.data as ArticleInfo[]
}

async function getArticle(id: number) {
  const res = await AxiosInstance.get(`https://dev.to/api/articles/${id}`)
  return res.data as Article
}

export { getArticles, getArticle }
