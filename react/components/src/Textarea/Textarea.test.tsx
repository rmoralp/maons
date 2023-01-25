import {vi} from 'vitest'

import {fireEvent, render, screen} from '@testing-library/react'

import {Textarea} from './Textarea'

describe('Textarea', () => {
  it('renders correctly with placeholder', () => {
    // Given
    const placeholder = 'Barcelona'
    const labelText = 'city-input'

    // And
    render(<Textarea placeholder={placeholder} aria-label={labelText} />)

    // Then
    const textarea = screen.getByLabelText(labelText)

    expect(textarea).toBeVisible()
    expect(textarea.placeholder).toEqual(placeholder)
  })

  it('has on change event handler', () => {
    // Given
    const onChange = vi.fn()
    const labelText = 'city-input'

    // And
    render(<Textarea onChange={onChange} aria-label={labelText} />)

    // And
    const textarea = screen.getByLabelText(labelText)

    fireEvent.change(textarea, {target: {value: 'Barcelona'}})

    // Then
    expect(textarea.value).toBe('Barcelona')
    expect(onChange).toHaveBeenCalled()
  })

  it('has on click event handler', () => {
    // Given
    const onClick = vi.fn()
    const labelText = 'city-input'

    // And
    render(<Textarea onClick={onClick} aria-label={labelText} />)

    // And
    const textarea = screen.getByLabelText(labelText)

    fireEvent.click(textarea)

    // Then
    expect(onClick).toHaveBeenCalled()
  })

  it('has on input event handler', () => {
    // Given
    const onInput = vi.fn()
    const labelText = 'city-input'

    // And
    render(<Textarea onInput={onInput} aria-label={labelText} />)

    // And
    const textarea = screen.getByLabelText(labelText)

    fireEvent.input(textarea, {target: {value: 'Barcelona'}})

    // Then
    expect(textarea.value).toBe('Barcelona')
    expect(onInput).toHaveBeenCalled()
  })
})
