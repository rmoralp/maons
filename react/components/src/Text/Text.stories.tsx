import React from 'react'

import {ComponentMeta} from '@storybook/react'

import {Text} from './Text'
import TextDocs from './Text.mdx'
import {TextElement} from './types'

export default {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    docs: {
      page: TextDocs
    }
  }
} as ComponentMeta<typeof Text>

export const Default = () => {
  return (
    <>
      <Text as={TextElement.abbr}>I18N</Text>
      <br />
      <Text as={TextElement.b}>Bold</Text>
      <br />
      <Text as={TextElement.cite}>Citation</Text>
      <br />
      <Text as={TextElement.del}>Deleted</Text>
      <br />
      <Text as={TextElement.em}>Emphasis</Text>
      <br />
      <Text as={TextElement.i}>Italic</Text>
      <br />
      <Text as={TextElement.ins}>Inserted</Text>
      <br />
      <Text as={TextElement.kbd}>Ctrl + C</Text>
      <br />
      <Text as={TextElement.mark}>Highlighted</Text>
      <br />
      <Text as={TextElement.p}>Text example</Text>
      <Text as={TextElement.s}>Strikethrough</Text>
      <br />
      <Text as={TextElement.samp}>Sample</Text>
      <br />
      <Text as={TextElement.small}>Small</Text>
      <br />
      <Text as={TextElement.span}>Inline text example</Text>
      <br />
      <Text as={TextElement.strong}>Strong</Text>
      <br />
      <Text as={TextElement.sub}>sub</Text>
      <br />
      <Text as={TextElement.sup}>sup</Text>
      <br />
      <Text as={TextElement.time} datetime="20:00">
        20:00
      </Text>
      <br />
      <Text as={TextElement.u}>Underline</Text>
    </>
  )
}
