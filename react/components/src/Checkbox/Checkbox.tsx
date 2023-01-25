import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {defaultStyles, disabledStyles, invalidStyles} from './styles'
import {CheckboxProps} from './types'

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
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
        type="checkbox"
      />
    )
  }
)

Checkbox.displayName = 'Checkbox'

export {Checkbox}
