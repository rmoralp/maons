import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {stylesByElement} from './styles'
import {TextElement, TextProps} from './types'

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({as: element = TextElement.p, className, ...props}, ref) => {
    const TextElement = element

    return (
      <TextElement
        className={cn(stylesByElement[element], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Text.displayName = 'Text'

export {Text}
