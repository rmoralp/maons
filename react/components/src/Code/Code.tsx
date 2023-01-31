import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {defaultStyles} from './styles'
import {CodeProps} from './types'

const Code = forwardRef<HTMLElement, CodeProps>(
  ({className, ...props}, ref) => {
    return (
      <code className={cn(defaultStyles, className)} ref={ref} {...props} />
    )
  }
)
Code.displayName = 'Code'

export {Code}
