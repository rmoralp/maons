import {fireEvent, render, screen} from '@testing-library/react'

import {ToastProvider} from './ToastContext'
import {useToast} from './useToast'

const customToast = {
  title: 'Title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  status: 'success'
}

const Toast = () => {
  const toast = useToast()

  return (
    <button
      onClick={() => {
        toast(customToast)
      }}
    >
      Open toast
    </button>
  )
}

const Default = () => {
  return (
    <ToastProvider>
      <Toast />
    </ToastProvider>
  )
}

describe('Toast', () => {
  it('renders correctly', () => {
    render(<Default />)

    fireEvent.click(screen.getByRole('button'))
    // Then
    expect(screen.getByText(customToast.title)).toBeVisible()
  })
})
