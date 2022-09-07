/* eslint-disable sonarjs/no-duplicate-string */
import { JSX, mergeProps, ParentProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'

function Typography(_props: TypographyProps) {
  const props = mergeProps({ variant: 'body' }, _props)

  const tag = () =>
    (props.tag ||
      (props.emphasis && 'em') ||
      {
        display: 'h1',
        heading: 'h2',
        title: 'h3',
        body: 'p',
        caption: 'span',
      }[props.variant]) as keyof JSX.IntrinsicElements

  const sizeClass = () =>
    ({
      display:
        'text-display-small md:text-display-medium xl:text-display-large',
      heading:
        'text-heading-small md:text-heading-medium xl:text-heading-large',
      title: 'text-title-small md:text-title-medium xl:text-title-large',
      body: 'text-body-small md:text-body-medium xl:text-body-large',
      caption:
        'text-caption-small md:text-caption-medium xl:text-caption-large',
    }[props.variant])

  const fontClass = () =>
    props.emphasis
      ? 'font-medium !font-serif not-italic'
      : {
          display: 'font-serif font-medium',
          heading: 'font-serif font-medium',
          title: 'font-serif font-medium',
          body: 'font-sans',
          caption: 'font-sans',
        }[props.variant]

  const colorClass = () =>
    props.emphasis
      ? 'text-amaranth dark:text-amaranth'
      : {
          display: 'text-vulcan dark:text-haze',
          heading: 'text-vulcan dark:text-haze',
          title: 'text-vulcan dark:text-haze',
          body: 'text-vulcan/80 dark:text-haze/80',
          caption: 'text-vulcan/80 dark:text-haze/80',
        }[props.variant]

  return (
    <Dynamic
      component={tag()}
      class={`${sizeClass()} ${fontClass()} ${colorClass()} ${
        props.class ?? ''
      }`}
    >
      {props.children}
    </Dynamic>
  )
}

type TypographyProps = ParentProps & {
  class?: string
  variant?: 'display' | 'heading' | 'title' | 'body' | 'caption'
  emphasis?: boolean
  tag?: keyof JSX.IntrinsicElements
}

export default Typography
