import {render, screen} from '@testing-library/react'

import {Separator} from './Separator'

describe('Separator', () => {
  it('renders correctly', () => {
    // Given
    render(<Separator />)

    // Then
    expect(screen.getByRole('separator')).toBeVisible()
  })
})
