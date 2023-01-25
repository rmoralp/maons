import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {
  defaultStyles,
  styleButtonDisabled,
  stylesByColor,
  stylesBySize
} from './styles'
import {ButtonColor, ButtonProps, ButtonSize, ButtonVariant} from './types'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      color = ButtonColor.primary,
      variant = ButtonVariant.solid,
      size = ButtonSize.md,
      disabled = false,
      ...props
    },
    ref
  ) => {
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
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export {Button}
