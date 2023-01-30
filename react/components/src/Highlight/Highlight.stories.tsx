import React from 'react'

import {ComponentMeta} from '@storybook/react'

import {Highlight} from './Highlight'
import HighlightDocs from './Highlight.mdx'

export default {
  title: 'Typography/Highlight',
  component: Highlight,
  parameters: {
    docs: {
      page: HighlightDocs
    }
  }
} as ComponentMeta<typeof Highlight>

export const Default = () => {
  return <Highlight>Highlighted content</Highlight>
}
