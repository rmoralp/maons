import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {citeStyles} from './styles'
import {BlockquoteCiteProps} from './types'

const BlockquoteCite = forwardRef<HTMLParagraphElement, BlockquoteCiteProps>(
  ({className, children, ...props}, ref) => {
    return (
      <cite className={cn(citeStyles, className)} {...props}>
        — {children}
      </cite>
    )
  }
)

BlockquoteCite.displayName = 'BlockquoteCite'

export {BlockquoteCite}
