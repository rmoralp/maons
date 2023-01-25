import {OptionHTMLAttributes, SelectHTMLAttributes} from 'react'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  isInvalid?: boolean
}

export interface SelectOptionProps
  extends OptionHTMLAttributes<HTMLOptionElement> {}
