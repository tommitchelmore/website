import Typography from '@components/Typography'
import { renderRichText, Transformers } from '@util/content/renderRichText'
import type { TypeExperience } from 'contentful'
import type { Component } from 'solid-js'

export type ExperienceItemProps = TypeExperience & {
  class?: string
}

const transformers: Transformers = {
  'unordered-list': (value) =>
    `<ul class="list-disc ml-4 space-y-2">${value}</ul>`,
}

const ExperienceItem: Component<ExperienceItemProps> = (props) => {
  return (
    <div class={`${props.class ?? ''} space-y-4`}>
      <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between">
        <Typography variant="title">{props.fields.title}</Typography>
        <Typography tag="span">
          {props.fields.dateFrom} - {props.fields.dateTo ?? 'Present'}
        </Typography>
      </div>
      <Typography class="italic">
        {props.fields.role} - {props.fields.location}
      </Typography>
      <div
        innerHTML={renderRichText(props.fields.body.content, transformers)}
      />
    </div>
  )
}

export default ExperienceItem
