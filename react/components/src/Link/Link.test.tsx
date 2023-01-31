import {render, screen} from '@testing-library/react'

import {Link} from './Link'

describe('Link', () => {
  it('renders correctly with content', () => {
    // Given
    const content = 'content'

    // And
    render(<Link href="https://www.w3.org/">{content}</Link>)

    // Then
    expect(screen.getByRole('link')).toBeVisible()
  })
})
