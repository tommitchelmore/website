import { apiPlugin, storyblokInit } from '@storyblok/js'

const token = import.meta.env.STORYBLOK_TOKEN

const { storyblokApi } = storyblokInit({
  accessToken: token,
  use: [apiPlugin],
})

export async function getLinks() {
  if (!storyblokApi) throw new Error('Storyblok API not initialized')

  const { data } = await storyblokApi.get('cdn/links', {
    version: 'draft',
  })

  return data ? data.links : null
}

export async function getStory(slug: string) {
  if (!storyblokApi) throw new Error('Storyblok API not initialized')

  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: 'draft',
  })

  return data ? data.story : null
}
