import React from 'react'

import {ComponentMeta} from '@storybook/react'

import {Separator} from './Separator'
import SeparatorDocs from './Separator.mdx'

export default {
  title: 'Data display/Separator',
  component: Separator,
  parameters: {
    docs: {
      page: SeparatorDocs
    }
  }
} as ComponentMeta<typeof Separator>

export const Default = () => {
  return <Separator href="https://www.w3.org/" />
}
