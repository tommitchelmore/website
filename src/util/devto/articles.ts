import axios from 'axios'
import type { ArticleInfo } from './types'

async function getArticles() {
  const res = await axios.get(
    `https://dev.to/api/articles?username=${import.meta.env.DEVTO_USERNAME}`
  )
  return res.data as ArticleInfo[]
}

export default getArticles
