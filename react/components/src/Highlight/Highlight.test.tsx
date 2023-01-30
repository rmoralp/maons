import {render, screen} from '@testing-library/react'

import {Highlight} from './Highlight'

describe('Highlight', () => {
  it('renders correctly with content', () => {
    // Given
    const content = 'Highlighted content'

    // And
    render(<Highlight>{content}</Highlight>)

    // Then
    const text = screen.getByText(content)

    expect(text).toBeVisible()
  })
})
