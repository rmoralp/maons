import {render, screen} from '@testing-library/react'

import {Radio} from './Radio'

describe('Radio', () => {
  it('renders correctly', () => {
    // Given
    const labelText = 'barcelona-radio'

    // And
    render(<Radio aria-label={labelText} />)

    // Then
    const radio = screen.getByLabelText(labelText)

    expect(radio).toBeVisible()
  })
})
