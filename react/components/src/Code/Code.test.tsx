import {render, screen} from '@testing-library/react'

import {Code} from './Code'
import {CodeContainer} from './CodeContainer'

describe('Code', () => {
  it('renders correctly with content', () => {
    // Given
    const content = 'var foo = "bar";'

    // And
    render(
      <CodeContainer className="mt-8">
        <Code>{content}</Code>
      </CodeContainer>
    )

    // Then
    expect(screen.getByText(/var foo/)).toBeVisible()
  })
})
