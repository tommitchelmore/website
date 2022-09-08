import type {
  Block,
  Inline,
  Text,
  BLOCKS,
  INLINES,
} from '@contentful/rich-text-types'

export function renderRichText(
  data: (Block | Inline | Text)[],
  transformers?: Transformers
): string {
  return data.reduce((acc, node) => {
    if (node.nodeType === 'text') {
      const N = node as Text
      return acc + N.value
    }

    const N = node as Block | Inline

    const tags: Record<BLOCKS | INLINES, keyof HTMLElementTagNameMap> = {
      blockquote: 'blockquote',
      'heading-1': 'h1',
      'heading-2': 'h2',
      'heading-3': 'h3',
      'heading-4': 'h4',
      'heading-5': 'h5',
      'heading-6': 'h6',
      'list-item': 'li',
      'ordered-list': 'ol',
      'table-cell': 'td',
      'table-header-cell': 'th',
      'table-row': 'tr',
      'unordered-list': 'ul',
      document: 'div',
      hr: 'hr',
      paragraph: 'p',
      table: 'table',
      'asset-hyperlink': 'a',
      'entry-hyperlink': 'a',
      hyperlink: 'a',
      'embedded-asset-block': 'div',
      'embedded-entry-block': 'div',
      'embedded-entry-inline': 'span',
    }

    if (transformers && N.nodeType in transformers) {
      return acc + transformers[N.nodeType]?.(renderRichText(N.content))
    }

    return (
      acc +
      `<${tags[N.nodeType]}>` +
      renderRichText(node.content) +
      `</${tags[N.nodeType]}>`
    )
  }, '')
}

export type Transformers = Partial<
  Record<BLOCKS | INLINES, (content: string) => string>
>
