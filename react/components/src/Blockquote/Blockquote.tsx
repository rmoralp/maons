import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {defaultStyles} from './styles'
import {BlockquoteProps} from './types'

const Blockquote = forwardRef<HTMLParagraphElement, BlockquoteProps>(
  ({className, ...props}, ref) => {
    return <blockquote className={cn(defaultStyles, className)} {...props} />
  }
)
Blockquote.displayName = 'Blockquote'

export {Blockquote}
