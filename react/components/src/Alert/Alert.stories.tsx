import React from 'react'

import {ComponentMeta, ComponentStory} from '@storybook/react'

import {Alert} from './Alert'
import AlertDocs from './Alert.mdx'
import {AlertDescription} from './AlertDescription'
import {AlertIcon} from './AlertIcon'
import {AlertStatus} from './types'

export default {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: {
    docs: {
      page: AlertDocs
    }
  }
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = args => (
  <Alert {...args}>
    <AlertIcon />
    <AlertDescription>
      <strong>Your browser is outdated!</strong> Your Maons experience may be
      degraded.
    </AlertDescription>
  </Alert>
)

export const Default = Template.bind({})
Default.args = {
  status: AlertStatus.info
}

export const Basic = () => (
  <Alert status="info">Your browser is up to date!</Alert>
)
