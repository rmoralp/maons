import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {defaultStyles, disabledStyles} from './styles'
import {RadioProps} from './types'

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({className, ...props}, ref) => {
    return (
      <input
        className={cn(defaultStyles, disabledStyles, className)}
        ref={ref}
        {...props}
        type="radio"
      />
    )
  }
)

Radio.displayName = 'Radio'

export {Radio}
