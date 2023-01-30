import {render, screen} from '@testing-library/react'

import {Blockquote} from './Blockquote'
import {BlockquoteCite} from './BlockquoteCite'
import {BlockquoteContent} from './BlockquoteContent'

describe('Blockquote', () => {
  it('renders correctly with content', () => {
    // Given
    const quote = 'Blockquote content'
    const author = 'John Doe'

    // And
    render(
      <Blockquote>
        <BlockquoteContent>{quote}</BlockquoteContent>
        <BlockquoteCite>{author}</BlockquoteCite>
      </Blockquote>
    )

    // Then
    expect(screen.getByText(quote)).toBeVisible()
    expect(screen.getByText(/John Doe/)).toBeVisible()
  })
})
