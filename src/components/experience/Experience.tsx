import type { Component } from 'solid-js'
import ExperienceItem from './ExperienceItem'

type IndexProps = {
  class?: string
  data?: unknown
}

const Index: Component<IndexProps> = (props) => {
  console.log(props.data)
  return (
    <div />
    // <div class={`${props.class ?? ''} space-y-16`}>
    //   <For each={data}>{(item) => <ExperienceItem {...item} />}</For>
    // </div>
  )
}

export default Index
