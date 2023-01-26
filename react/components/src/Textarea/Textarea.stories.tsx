import React from 'react'

import {ComponentMeta, ComponentStory} from '@storybook/react'

import {Textarea} from './Textarea'
import TextareaDocs from './Textarea.mdx'

export default {
  title: 'Forms/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      page: TextareaDocs
    }
  }
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = args => <Textarea {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Barcelona',
  disabled: false,
  isInvalid: false
}

export const Invalid = Template.bind({})
Invalid.args = {
  placeholder: 'Barcelona',
  disabled: false,
  isInvalid: true,
  value: 'Bar'
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  isInvalid: false,
  value: 'Barcelona'
}
