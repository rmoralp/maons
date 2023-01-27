import {render, screen} from '@testing-library/react'

import {Heading} from './Heading'

describe('Heading', () => {
  it('renders correctly with content', () => {
    // Given
    const text = 'Title'

    // And
    render(<Heading>{text}</Heading>)

    // Then
    const heading = screen.getByRole('heading', {name: text})

    expect(heading).toBeVisible()
  })
})
