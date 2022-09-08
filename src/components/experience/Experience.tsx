import type { TypeExperience } from 'contentful'
import { Component, For } from 'solid-js'
import ExperienceItem from './ExperienceItem'

type IndexProps = {
  class?: string
  data?: TypeExperience[]
}

const Index: Component<IndexProps> = (props) => {
  return (
    <div class={`${props.class ?? ''} space-y-16`}>
      <For each={props.data}>{(item) => <ExperienceItem {...item} />}</For>
    </div>
  )
}

export default Index
