import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {defaultStyles} from './styles'
import {LinkProps} from './types'

const Link = forwardRef<HTMLLinkElement, LinkProps>(
  ({className, ...props}, ref) => {
    return <a className={cn(defaultStyles, className)} ref={ref} {...props} />
  }
)
Link.displayName = 'Link'

export {Link}
