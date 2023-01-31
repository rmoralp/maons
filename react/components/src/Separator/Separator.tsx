import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {defaultStyles} from './styles'
import {SeparatorProps} from './types'

const Separator = forwardRef<HTMLElement, SeparatorProps>(
  ({className, ...props}, ref) => {
    return <hr className={cn(defaultStyles, className)} ref={ref} {...props} />
  }
)
Separator.displayName = 'Separator'

export {Separator}
