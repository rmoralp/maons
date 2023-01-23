import {PropsWithChildren} from 'react'

import {cn} from '../utils/cn'
import {
  defaultStyles,
  styleButtonDisabled,
  stylesByColor,
  stylesBySize
} from './styles'
import {ButtonColor, ButtonSize, ButtonVariant} from './types'

interface ButtonProps {
  className?: string
  color: ButtonColor
  disabled?: boolean
  onClick?: () => void
  labelText?: string
  size?: ButtonSize
  type?: 'button' | 'submit' | 'reset'
  variant?: ButtonVariant
}

const Button = ({
  children,
  className,
  color = ButtonColor.primary,
  disabled = false,
  onClick,
  labelText,
  size = ButtonSize.md,
  type,
  variant = ButtonVariant.solid
}: PropsWithChildren<ButtonProps>) => {
  const isLink = variant === ButtonVariant.link
  const disabledStyle = isLink ? {} : styleButtonDisabled

  return (
    <button
      className={cn(
        defaultStyles,
        stylesBySize[size],
        stylesByColor[variant][color],
        disabled && disabledStyle,
        className
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
      aria-label={labelText}
    >
      {children}
    </button>
  )
}

export {Button}
