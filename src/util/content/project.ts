import type { TypeProject } from 'contentful'
import { getContentfulClient } from '.'

const client = getContentfulClient()

export async function getProjects() {
  const entries = await client.getEntries({
    content_type: 'project',
  })

  return entries.items as TypeProject[]
}

export async function getProject(id: string) {
  return (await client.getEntry(id)) as TypeProject
}
