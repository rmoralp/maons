import {useState} from 'react'

import {ComponentMeta} from '@storybook/react'

import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalTitle,
  ModalTrigger
} from './Modal'
import ModalDocs from './Modal.mdx'

export default {
  title: 'Overlay/Modal',
  component: Modal,
  parameters: {
    docs: {
      page: ModalDocs
    }
  }
} as ComponentMeta<typeof Modal>

const wait = () => new Promise(resolve => setTimeout(resolve, 1000))

export const Default = () => {
  const [open, setOpen] = useState(true)

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <ModalTrigger>Open</ModalTrigger>
      <ModalContent>
        <ModalTitle>Hello</ModalTitle>
        <ModalDescription>
          <p>Lorem ipsum</p>
        </ModalDescription>
        <form
          onSubmit={event => {
            wait().then(() => setOpen(false))
            event.preventDefault()
          }}
        >
          {/** some inputs */}
          <button type="submit">Submit</button>
        </form>
      </ModalContent>
    </Modal>
  )
}
