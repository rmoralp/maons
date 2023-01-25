import {vi} from 'vitest'

import {fireEvent, render, screen} from '@testing-library/react'

import {Input} from './Input'

describe('Input', () => {
  it('renders correctly with placeholder', () => {
    // Given
    const placeholder = 'Barcelona'
    const labelText = 'city-input'

    // And
    render(<Input placeholder={placeholder} aria-label={labelText} />)

    // Then
    const input = screen.getByLabelText(labelText)

    expect(input).toBeVisible()
    expect(input.placeholder).toEqual(placeholder)
  })

  it('has on change event handler', () => {
    // Given
    const onChange = vi.fn()
    const labelText = 'city-input'

    // And
    render(<Input onChange={onChange} aria-label={labelText} />)

    // And
    const input = screen.getByLabelText(labelText)

    fireEvent.change(input, {target: {value: 'Barcelona'}})

    // Then
    expect(input.value).toBe('Barcelona')
    expect(onChange).toHaveBeenCalled()
  })

  it('has on click event handler', () => {
    // Given
    const onClick = vi.fn()
    const labelText = 'city-input'

    // And
    render(<Input onClick={onClick} aria-label={labelText} />)

    // And
    const input = screen.getByLabelText(labelText)

    fireEvent.click(input)

    // Then
    expect(onClick).toHaveBeenCalled()
  })

  it('has on input event handler', () => {
    // Given
    const onInput = vi.fn()
    const labelText = 'city-input'

    // And
    render(<Input onInput={onInput} aria-label={labelText} />)

    // And
    const input = screen.getByLabelText(labelText)

    fireEvent.input(input, {target: {value: 'Barcelona'}})

    // Then
    expect(input.value).toBe('Barcelona')
    expect(onInput).toHaveBeenCalled()
  })
})
