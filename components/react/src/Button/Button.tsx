import {PropsWithChildren} from 'react'

import {cn} from '../utils/cn'
import {styleDisabled, stylesByColor, stylesBySize} from './styles'
import {ButtonColor, ButtonSize, ButtonVariant} from './types'

interface ButtonProps {
  className?: string
  color: ButtonColor
  disabled?: boolean
  onClick?: () => void
  size?: ButtonSize
  type?: 'button' | 'submit' | 'reset'
  variant: ButtonVariant
}

const Button = ({
  children,
  className,
  color = ButtonColor.primary,
  variant = ButtonVariant.solid,
  disabled = false,
  onClick,
  size = ButtonSize.md,
  type
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={cn(
        stylesBySize[size],
        stylesByColor[variant][color],
        styleDisabled,
        className
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export {Button}
