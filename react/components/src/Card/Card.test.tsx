import {render, screen} from '@testing-library/react'

import {Card} from './Card'

describe('Card', () => {
  it('renders correctly with content', () => {
    // Given
    const content = 'example'

    // And
    render(<Card>{content}</Card>)

    // Then
    expect(screen.getByText(content)).toBeVisible()
  })
})
