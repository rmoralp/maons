import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {ListItemProps} from './types'

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({className, ...props}, ref) => {
    return <li className={cn(className)} ref={ref} {...props} />
  }
)

ListItem.displayName = 'ListItem'

export {ListItem}
