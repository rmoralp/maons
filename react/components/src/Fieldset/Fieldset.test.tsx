import {render, screen} from '@testing-library/react'

import {Fieldset} from './Fieldset'

describe('Fieldset', () => {
  it('renders correctly with content', () => {
    // Given
    const text = 'form fields'

    // And
    render(<Fieldset>{text}</Fieldset>)

    // Then
    const fieldset = screen.getByText(text)

    expect(fieldset).toBeVisible()
  })
})
