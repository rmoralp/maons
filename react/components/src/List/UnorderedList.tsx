import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {unorderedListStyles} from './styles'
import {ListProps} from './types'

const UnorderedList = forwardRef<HTMLUListElement, ListProps>(
  ({className, ...props}, ref) => {
    return (
      <ul className={cn(unorderedListStyles, className)} ref={ref} {...props} />
    )
  }
)

UnorderedList.displayName = 'UnorderedList'

export {UnorderedList}
