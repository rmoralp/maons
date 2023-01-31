import React from 'react'

import {ComponentMeta} from '@storybook/react'

import {Link} from './Link'
import LinkDocs from './Link.mdx'

export default {
  title: 'Typography/Link',
  component: Link,
  parameters: {
    docs: {
      page: LinkDocs
    }
  }
} as ComponentMeta<typeof Link>

export const Default = () => {
  return <Link href="https://www.w3.org/">Link to W3C</Link>
}
