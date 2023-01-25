import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {defaultStyles, disabledStyles, invalidStyles} from './styles'
import {SelectProps} from './types'

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({className, isInvalid, ...props}, ref) => {
    return (
      <select
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

Select.displayName = 'Select'

export {Select}
