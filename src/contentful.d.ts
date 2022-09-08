import type * as CFRichTextTypes from '@contentful/rich-text-types'
import type * as Contentful from 'contentful'

declare module 'contentful' {
  export interface TypeEducationFields {
    title: Contentful.EntryFields.Symbol
    award: Contentful.EntryFields.Symbol
    body: CFRichTextTypes.Block | CFRichTextTypes.Inline
    dateFrom: Contentful.EntryFields.Date
    dateTo: Contentful.EntryFields.Date
  }

  export type TypeEducation = Contentful.Entry<TypeEducationFields>

  export interface TypeExperienceFields {
    title: Contentful.EntryFields.Symbol
    role: Contentful.EntryFields.Symbol
    location: Contentful.EntryFields.Symbol
    body: CFRichTextTypes.Block | CFRichTextTypes.Inline
    dateFrom: Contentful.EntryFields.Date
    dateTo?: Contentful.EntryFields.Date
  }

  export type TypeExperience = Contentful.Entry<TypeExperienceFields>

  export interface TypeProjectFields {
    title: Contentful.EntryFields.Symbol
    slug: Contentful.EntryFields.Symbol
    subtitle: Contentful.EntryFields.Symbol
    body?: CFRichTextTypes.Block | CFRichTextTypes.Inline
    tags?: Contentful.EntryFields.Symbol[]
    image: Contentful.Asset
    link?: Contentful.EntryFields.Symbol
    github?: Contentful.EntryFields.Symbol
  }

  export type TypeProject = Contentful.Entry<TypeProjectFields>
}
