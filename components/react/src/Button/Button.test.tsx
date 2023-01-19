import {vi} from 'vitest'

import {fireEvent, render, screen} from '@testing-library/react'

import {Button} from './Button'

describe('Button', () => {
  it('renders correctly with content', () => {
    // Given
    const text = 'click me'

    // And
    render(<Button>{text}</Button>)

    // Then
    expect(screen.getByText(text)).toBeVisible()
  })

  it('should has on click event handler', () => {
    // Given
    const text = 'click me'
    const onClick = vi.fn()

    // And
    render(<Button onClick={onClick}>{text}</Button>)

    // Then
    fireEvent.click(screen.getByRole('button'))

    expect(onClick).toHaveBeenCalled()
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should disable on click event if it is disabled', () => {
    // Given
    const text = 'click me'
    const onClick = vi.fn()

    // And
    render(
      <Button onClick={onClick} disabled>
        {text}
      </Button>
    )

    // Then
    fireEvent.click(screen.getByRole('button'))

    expect(onClick.called).toBeFalsy()
  })
})
