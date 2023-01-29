import {render, screen} from '@testing-library/react'

import {Text} from './Text'

describe('Text', () => {
  it('renders correctly with content', () => {
    // Given
    const content = 'content'

    // And
    render(<Text>{content}</Text>)

    // Then
    const text = screen.getByText(content)

    expect(text).toBeVisible()
  })
})
