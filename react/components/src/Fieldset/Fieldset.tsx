import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {defaultStyles} from './styles'
import {FieldsetProps} from './types'

const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
  ({className, ...props}, ref) => {
    return (
      <fieldset className={cn(defaultStyles, className)} ref={ref} {...props} />
    )
  }
)
Fieldset.displayName = 'Fieldset'

export {Fieldset}
