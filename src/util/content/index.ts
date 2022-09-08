import contentful from 'contentful'

function getContentfulClient() {
  if (!import.meta.env.CONTENTFUL_SPACE_ID) {
    throw new Error('CONTENTFUL_SPACE_ID is not defined')
  }

  if (!import.meta.env.CONTENTFUL_TOKEN) {
    throw new Error('CONTENTFUL_ACCESS_TOKEN is not defined')
  }

  return contentful.createClient({
    space: import.meta.env.CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.CONTENTFUL_TOKEN,
  })
}

export { getContentfulClient }
