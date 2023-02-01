import {ComponentMeta} from '@storybook/react'

import {Button} from '../Button'
import {Toast} from './Toast'
import ToastDocs from './Toast.mdx'
import {ToastProvider} from './ToastContext'
import {useToast} from './useToast'

export default {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    docs: {
      page: ToastDocs
    }
  }
} as ComponentMeta<typeof Toast>

const toastContent = {
  title: 'Lorem ipsum',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  status: 'success'
}

const DemoToast = () => {
  const toast = useToast()

  return (
    <>
      <Button
        onClick={() => toast({...toastContent, status: 'success'})}
        size="sm"
        className="mb-4"
      >
        Add success toast
      </Button>
      <br />
      <Button
        onClick={() => toast({...toastContent, status: 'error'})}
        size="sm"
        className="mb-4"
      >
        Add error toast
      </Button>
      <br />
      <Button
        onClick={() => toast({...toastContent, status: 'info'})}
        size="sm"
        className="mb-4"
      >
        Add info toast
      </Button>
      <br />
      <Button
        onClick={() => toast({...toastContent, status: 'warning'})}
        size="sm"
        className="mb-4"
      >
        Add warning toast
      </Button>
    </>
  )
}

export const Default = () => (
  <ToastProvider>
    <DemoToast />
  </ToastProvider>
)
