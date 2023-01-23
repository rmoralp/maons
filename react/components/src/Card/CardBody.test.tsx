import {render, screen} from '@testing-library/react'

import {CardBody} from './CardBody'

describe('CardBody', () => {
  it('renders correctly with content', () => {
    // Given
    const content = 'example'

    // And
    render(<CardBody>{content}</CardBody>)

    // Then
    expect(screen.getByText(content)).toBeVisible()
  })
})
