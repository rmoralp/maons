import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {defaultStyles, disabledStyles, invalidStyles} from './styles'
import {RadioProps} from './types'

const Radio = forwardRef<HTMLInputElement, RadioProps>(
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

Radio.displayName = 'Radio'

export {Radio}
