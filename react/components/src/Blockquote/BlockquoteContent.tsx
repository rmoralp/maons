import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {contentStyles} from './styles'
import {BlockquoteContentProps} from './types'

const BlockquoteContent = forwardRef<
  HTMLParagraphElement,
  BlockquoteContentProps
>(({className, ...props}, ref) => {
  return <p className={cn(contentStyles, className)} {...props} />
})

BlockquoteContent.displayName = 'BlockquoteContent'

export {BlockquoteContent}
