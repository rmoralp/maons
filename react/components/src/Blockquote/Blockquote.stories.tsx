import React from 'react'

import {ComponentMeta} from '@storybook/react'

import {Blockquote} from './Blockquote'
import BlockquoteDocs from './Blockquote.mdx'
import {BlockquoteCite} from './BlockquoteCite'
import {BlockquoteContent} from './BlockquoteContent'

export default {
  title: 'Typography/Blockquote',
  component: Blockquote,
  parameters: {
    docs: {
      page: BlockquoteDocs
    }
  }
} as ComponentMeta<typeof Blockquote>

export const Default = () => {
  return (
    <div className="bg-white p-4">
      <Blockquote>
        <BlockquoteContent>
          {
            "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life."
          }
        </BlockquoteContent>
        <BlockquoteCite>Bill Gates, Microsoft</BlockquoteCite>
      </Blockquote>
    </div>
  )
}
