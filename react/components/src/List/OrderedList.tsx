import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {orderedListStyles} from './styles'
import {OrderedListProps} from './types'

const OrderedList = forwardRef<HTMLOListElement, OrderedListProps>(
  ({className, ...props}, ref) => {
    return (
      <ol className={cn(orderedListStyles, className)} ref={ref} {...props} />
    )
  }
)

OrderedList.displayName = 'OrderedList'

export {OrderedList}
