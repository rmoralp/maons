import {render, screen} from '@testing-library/react'

import {Link} from './Link'

describe('Link', () => {
  it('renders correctly with content', () => {
    // Given
    const content = 'content'

    // And
    render(<Link>{content}</Link>)

    // Then
    expect(screen.getByRole('link')).toBeVisible()
  })
})
