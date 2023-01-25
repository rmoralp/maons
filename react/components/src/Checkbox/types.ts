import {InputHTMLAttributes} from 'react'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  isInvalid?: boolean
}
