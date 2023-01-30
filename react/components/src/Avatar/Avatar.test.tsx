import {render, screen} from '@testing-library/react'

import {Avatar} from './Avatar'

describe('Avatar', () => {
  it('renders correctly', () => {
    // Given
    const src =
      'https://this-person-does-not-exist.com/img/avatar-828c22675120d5449af9c3df6e53842f.jpg'
    const alt = 'John Doe'

    // And
    render(<Avatar src={src} alt={alt} />)

    // Then
    const avatar = screen.getByRole('img')

    expect(avatar).toBeVisible()
  })
})
