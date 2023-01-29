import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {defaultStyles} from './styles'
import {HighlightProps} from './types'

const Highlight = forwardRef<HTMLParagraphElement, HighlightProps>(
  ({className, ...props}, ref) => {
    return (
      <mark className={cn(defaultStyles, className)} ref={ref} {...props} />
    )
  }
)
Highlight.displayName = 'Highlight'

export {Highlight}
