import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {defaultStyles, disabledStyles, invalidStyles} from './styles'
import {InputProps} from './types'

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({className, isInvalid, ...props}, ref) => {
    return (
      <input
        className={cn(
          defaultStyles,
          disabledStyles,
          isInvalid && invalidStyles,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export {Input}
