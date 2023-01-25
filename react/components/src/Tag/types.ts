import {HTMLAttributes} from 'react'

export enum TagSize {
  lg = 'lg',
  md = 'md',
  sm = 'sm',
  xs = 'xs'
}

export enum TagColor {
  error = 'error',
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  gray = 'gray'
}

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string
  color: TagColor
  labelText?: string
  size?: TagSize
}
