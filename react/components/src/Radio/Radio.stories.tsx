import React from 'react'

import {ComponentMeta, ComponentStory} from '@storybook/react'

import {Radio} from './Radio'
import RadioDocs from './Radio.mdx'

export default {
  title: 'Forms/Radio',
  component: Radio,
  parameters: {
    docs: {
      page: RadioDocs
    }
  }
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = args => <Radio {...args} />

export const Default = Template.bind({})
Default.args = {
  disabled: false
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  checked: false
}
