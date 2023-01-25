import {render, screen} from '@testing-library/react'

import {Checkbox} from './Checkbox'

describe('Checkbox', () => {
  it('renders correctly with placeholder', () => {
    // Given
    const labelText = 'city-checkbox'

    // And
    render(<Checkbox aria-label={labelText} />)

    // Then
    const checkbox = screen.getByLabelText(labelText)

    expect(checkbox).toBeVisible()
  })
})
