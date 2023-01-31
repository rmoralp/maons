import React from 'react'

import {ComponentMeta} from '@storybook/react'

import ListDocs from './List.mdx'
import {ListItem} from './ListItem'
import {OrderedList} from './OrderedList'
import {UnorderedList} from './UnorderedList'

export default {
  title: 'Data display/List',
  component: UnorderedList,
  parameters: {
    docs: {
      page: ListDocs
    }
  }
} as ComponentMeta<typeof UnorderedList>

const items = (
  <>
    <ListItem>Lorem ipsum dolor sit amet</ListItem>
    <ListItem>Consectetur adipiscing elit</ListItem>
    <ListItem>Integer molestie lorem at massa</ListItem>
    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
  </>
)

export const Default = () => {
  return (
    <>
      <UnorderedList className="mb-8">{items}</UnorderedList>
      <OrderedList>{items}</OrderedList>
    </>
  )
}
