import React from 'react'

import {ComponentMeta, ComponentStory} from '@storybook/react'

import {Label} from './Label'
import LabelDocs from './Label.mdx'

export default {
  title: 'Forms/Label',
  component: Label,
  parameters: {
    docs: {
      page: LabelDocs
    }
  }
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Button> = args => <Label {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'City'
}
