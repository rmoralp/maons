import React from 'react'

import {ComponentMeta, ComponentStory} from '@storybook/react'

import {Select} from './Select'
import SelectDocs from './Select.mdx'
import {SelectOption} from './SelectOption'

export default {
  title: 'Forms/Select',
  component: Select,
  parameters: {
    docs: {
      page: SelectDocs
    }
  }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Button> = args => (
  <Select {...args}>
    <SelectOption disabled selected>
      Select an option
    </SelectOption>
    <SelectOption value={1}>Item 1</SelectOption>
    <SelectOption value={2}>Item 2</SelectOption>
  </Select>
)

export const Default = Template.bind({})
Default.args = {
  disabled: false,
  isInvalid: false
}

export const Invalid = Template.bind({})
Invalid.args = {
  disabled: false,
  isInvalid: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  isInvalid: false,
  value: 1
}
