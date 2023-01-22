import React from 'react'

import {ComponentMeta, ComponentStory} from '@storybook/react'

import {Button} from './Button'
import ButtonDocs from './Button.mdx'
import {ButtonColor} from './types'

export default {
  title: 'Forms/Button',
  component: Button,
  parameters: {
    docs: {
      page: ButtonDocs
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: ButtonColor.primary,
  children: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: ButtonColor.secondary,
  children: 'Button'
}

export const Success = Template.bind({})
Success.args = {
  color: ButtonColor.success,
  children: 'Button'
}

export const Error = Template.bind({})
Error.args = {
  color: ButtonColor.error,
  children: 'Button'
}
