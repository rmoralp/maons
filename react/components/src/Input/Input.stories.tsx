import React from 'react'

import {ComponentMeta, ComponentStory} from '@storybook/react'

import {Input} from './Input'
import InputDocs from './Input.mdx'

export default {
  title: 'Forms/Input',
  component: Input,
  parameters: {
    docs: {
      page: InputDocs
    }
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

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
