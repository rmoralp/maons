import {render, screen} from '@testing-library/react'

import {Alert} from './Alert'
import {AlertDescription} from './AlertDescription'
import {AlertIcon} from './AlertIcon'

describe('Alert', () => {
  it('renders correctly with content', () => {
    // Given
    const text = 'Your Maons experience will be awesome'

    // And
    render(
      <Alert status="info">
        <AlertIcon />
        <AlertDescription>{text}</AlertDescription>
      </Alert>
    )

    // Then
    expect(screen.getByText(text)).toBeVisible()
  })
})
