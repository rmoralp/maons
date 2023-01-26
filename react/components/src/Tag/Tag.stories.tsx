import React from 'react'

import {ComponentMeta, ComponentStory} from '@storybook/react'

import {Tag} from './Tag'
import TagDocs from './Tag.mdx'
import {TagColor} from './types'

export default {
  title: 'Data display/Tag',
  component: Tag,
  parameters: {
    docs: {
      page: TagDocs
    }
  }
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = args => <Tag {...args} />

export const Gray = Template.bind({})
Gray.args = {
  color: TagColor.gray,
  children: 'example'
}

export const Primary = Template.bind({})
Primary.args = {
  color: TagColor.primary,
  children: 'example'
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: TagColor.secondary,
  children: 'example'
}

export const Success = Template.bind({})
Success.args = {
  color: TagColor.success,
  children: 'example'
}

export const Error = Template.bind({})
Error.args = {
  color: TagColor.error,
  children: 'example'
}
