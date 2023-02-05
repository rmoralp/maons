/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import {ComponentMeta, ComponentStory} from '@storybook/react'

import {Image} from './Image'
import ImageDocs from './Image.mdx'

export default {
  title: 'Media/Image',
  component: Image,
  parameters: {
    docs: {
      page: ImageDocs
    }
  }
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = args => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Landscape_mountain.jpg',
  alt: 'landscape'
}

export const LazyLoad = () => {
  return (
    <div>
      <div className="h-[2000px]">scroll to load image</div>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/8/86/Landscape_mountain.jpg"
        alt="landscape"
        loading="lazy"
        userAgent={navigator.userAgent}
        height="300"
      />
    </div>
  )
}
