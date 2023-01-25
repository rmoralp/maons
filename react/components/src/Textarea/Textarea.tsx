import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {defaultStyles, invalidStyles} from './styles'
import {TextareaProps} from './types'

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({className, isInvalid, ...props}, ref) => {
    return (
      <textarea
        className={cn(defaultStyles, isInvalid && invalidStyles, className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export {Textarea}
