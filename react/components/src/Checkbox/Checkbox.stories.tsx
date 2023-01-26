import React from 'react'

import {ComponentMeta, ComponentStory} from '@storybook/react'

import {Checkbox} from './Checkbox'
import CheckboxDocs from './Checkbox.mdx'

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      page: CheckboxDocs
    }
  }
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = args => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {
  disabled: false,
  isInvalid: false
}

export const Invalid = Template.bind({})
Invalid.args = {
  disabled: false,
  isInvalid: true,
  checked: false
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  isInvalid: false,
  checked: false
}
