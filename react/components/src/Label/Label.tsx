import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {defaultStyles} from './styles'
import {LabelProps} from './types'

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({className, ...props}, ref) => {
    return (
      <label className={cn(defaultStyles, className)} ref={ref} {...props} />
    )
  }
)
Label.displayName = 'Label'

export {Label}
