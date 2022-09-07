import { Component, For } from 'solid-js'
import ExperienceItem from './ExperienceItem'
import type { ExperienceItemProps } from './ExperienceItem'

type IndexProps = {
  class?: string
}

const data: ExperienceItemProps[] = [
  {
    company: 'Iceline Hosting',
    job: 'Project Manager',
    type: 'Contract',
    start: 'September 2022',
    end: 'Present',
    description: [
      'Lead role in overseeing development of new products and services',
      'Development of strategy, product specifications and design guidelines',
      'Use of experience to make key archiectural and operational decisions',
    ],
  },
  {
    company: 'Iceline Hosting',
    job: 'Software Engineer',
    type: 'Contract',
    start: 'April 2021',
    end: 'September 2022',
    description: [
      'Production of performant internal & customer facing web applications',
      'Production of new, dynamic company website',
      "Produced a comprehensive infrastructure management tool for use with a major industry partner's API",
    ],
  },
]

const Index: Component<IndexProps> = (props) => {
  return (
    <div class={`${props.class ?? ''} space-y-16`}>
      <For each={data}>{(item) => <ExperienceItem {...item} />}</For>
    </div>
  )
}

export default Index
