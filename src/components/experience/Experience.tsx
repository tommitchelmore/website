import { Component, For } from 'solid-js'
import ExperienceItem from './ExperienceItem'
import { getStory } from 'src/util/storyblok'

type IndexProps = {
  class?: string
}

const data = await getStory('experience')
console.log(data)

const Index: Component<IndexProps> = (props) => {
  return (
    <div />
    // <div class={`${props.class ?? ''} space-y-16`}>
    //   <For each={data}>{(item) => <ExperienceItem {...item} />}</For>
    // </div>
  )
}

export default Index
