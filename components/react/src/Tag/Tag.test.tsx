import {render, screen} from '@testing-library/react'

import {Tag} from './Tag'

describe('Tag', () => {
  it('renders correctly with content', () => {
    // Given
    const text = 'example'

    // And
    render(<Tag>{text}</Tag>)

    // Then
    expect(screen.getByText(text)).toBeVisible()
  })
})
