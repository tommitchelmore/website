import axios from 'axios'
import axiosRetry from 'axios-retry'
import type { Article, ArticleInfo } from './types'

axiosRetry(axios, {
  retries: 12,
})

async function getArticles() {
  const res = await axios.get(`https://dev.to/api/articles/me`, {
    headers: {
      'api-key': import.meta.env.DEVTO_API_KEY,
    },
  })
  return res.data as ArticleInfo[]
}

async function getArticle(id: number) {
  const res = await axios.get(`https://dev.to/api/articles/${id}`)
  return res.data as Article
}

export { getArticles, getArticle }
