import axios from 'axios'
import axiosCacheAdapter from 'axios-cache-adapter'

const cache = axiosCacheAdapter.setupCache({
  maxAge: 15 * 60 * 1000,
})

const AxiosInstance = axios.create({
  adapter: cache.adapter,
})

export default AxiosInstance
