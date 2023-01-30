import {render, screen} from '@testing-library/react'

import {Image} from './Image'

describe('Image', () => {
  it('renders correctly', () => {
    // Given
    const src =
      'https://upload.wikimedia.org/wikipedia/commons/8/86/Landscape_mountain.jpg'
    const alt = 'landscape'

    // And
    render(<Image src={src} alt={alt} />)

    // Then
    const image = screen.getByRole('img')

    expect(image).toBeVisible()
  })
})
