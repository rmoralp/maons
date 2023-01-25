import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {SelectOptionProps} from './types'

const SelectOption = forwardRef<HTMLOptionElement, SelectOptionProps>(
  ({className, ...props}, ref) => {
    return <option className={cn(className)} ref={ref} {...props} />
  }
)

SelectOption.displayName = 'SelectOption'

export {SelectOption}
