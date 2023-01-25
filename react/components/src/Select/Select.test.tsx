import {render, screen} from '@testing-library/react'

import {Select} from './Select'
import {SelectOption} from './SelectOption'

describe('Select', () => {
  it('renders correctly with placeholder', () => {
    // Given
    const placeholder = 'Barcelona'
    const labelText = 'city-select'

    // And
    render(
      <Select placeholder={placeholder} aria-label={labelText} defaultValue={0}>
        <SelectOption disabled value={0}>
          Select an option
        </SelectOption>
        <SelectOption value={1}>Item 1</SelectOption>
        <SelectOption value={2}>Item 2</SelectOption>
      </Select>
    )

    // Then
    const input = screen.getByLabelText(labelText)

    expect(input).toBeVisible()
  })
})
