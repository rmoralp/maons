import React from 'react'

import {ComponentMeta, ComponentStory} from '@storybook/react'

import {Input, Label} from '../index'
import {Fieldset} from './Fieldset'
import FieldsetDocs from './Fieldset.mdx'

export default {
  title: 'Forms/Fieldset',
  component: Fieldset,
  parameters: {
    docs: {
      page: FieldsetDocs
    }
  }
} as ComponentMeta<typeof Fieldset>

const Template: ComponentStory<typeof Fieldset> = args => <Fieldset {...args} />

const Content = () => {
  return (
    <>
      <Label htmlFor="city">City</Label>
      <Input id="city" type="text" />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  children: <Content />
}
