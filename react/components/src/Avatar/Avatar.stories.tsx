/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import {ComponentMeta, ComponentStory} from '@storybook/react'

import {Avatar} from './Avatar'
import AvatarDocs from './Avatar.mdx'
import {AvatarSize} from './types'

export default {
  title: 'Media/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      page: AvatarDocs
    }
  }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  src: 'https://this-person-does-not-exist.com/img/avatar-828c22675120d5449af9c3df6e53842f.jpg',
  alt: 'John Doe',
  size: AvatarSize.xs
}
