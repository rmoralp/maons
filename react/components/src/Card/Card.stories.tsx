import React from 'react'

import {ComponentMeta, ComponentStory} from '@storybook/react'

import {Card} from './Card'
import CardDocs from './Card.mdx'
import {CardBody} from './CardBody'

export default {
  title: 'Data display/Card',
  component: Card,
  parameters: {
    docs: {
      page: CardDocs
    }
  }
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = ({children, ...args}) => (
  <Card {...args}>
    <CardBody>{children}</CardBody>
  </Card>
)

export const Default = Template.bind({})
Default.args = {
  children: 'example'
}
