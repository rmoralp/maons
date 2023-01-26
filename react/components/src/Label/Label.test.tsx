import {render, screen} from '@testing-library/react'

import {Label} from './Label'

describe('Label', () => {
  it('renders correctly with content', () => {
    // Given
    const text = 'City'

    // And
    render(<Label>{text}</Label>)

    // Then
    const label = screen.getByText(text)

    expect(label).toBeVisible()
  })
})
