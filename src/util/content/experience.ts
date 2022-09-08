import { getContentfulClient } from '.'

const client = getContentfulClient()

export async function getExperiences() {
  const entries = await client.getEntries({
    content_type: 'experience',
  })

  return entries.items
}

export async function getExperience(id: string) {
  return await client.getEntry(id)
}
