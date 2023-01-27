import React from 'react'

import {ComponentMeta} from '@storybook/react'

import {Heading} from './Heading'
import HeadingDocs from './Heading.mdx'
import {HeadingElement} from './types'

export default {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    docs: {
      page: HeadingDocs
    }
  }
} as ComponentMeta<typeof Heading>

export const Default = () => {
  return (
    <>
      <Heading as={HeadingElement.h1}>Heading 1</Heading>
      <Heading as={HeadingElement.h2} className="mt-6">
        Heading 2
      </Heading>
      <Heading as={HeadingElement.h3} className="mt-6">
        Heading 3
      </Heading>
      <Heading as={HeadingElement.h4} className="mt-6">
        Heading 4
      </Heading>
      <Heading as={HeadingElement.h5} className="mt-6">
        Heading 5
      </Heading>
      <Heading as={HeadingElement.h6} className="mt-6">
        Heading 6
      </Heading>
    </>
  )
}
