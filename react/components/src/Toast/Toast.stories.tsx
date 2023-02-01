import {ComponentMeta} from '@storybook/react'

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

const DemoToast = () => {
  const toast = useToast()

  return (
    <button
      onClick={() => {
        toast({
          title: 'Success',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          status: 'success'
        })
      }}
      className="h-fit rounded-lg bg-green-500 py-2 px-4 text-lg hover:bg-green-600"
    >
      Success
    </button>
  )
}
export const Default = () => {
  return (
    <ToastProvider>
      <DemoToast />
    </ToastProvider>
  )
}
