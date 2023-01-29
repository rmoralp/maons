import {forwardRef} from 'react'

import {Highlight} from '../Highlight'
import {cn} from '../utils/cn'
import {TextElement, TextProps} from './types'

const markElement = TextElement.mark
const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({as: element = TextElement.p, className, ...props}, ref) => {
    if (element === markElement) {
      return <Highlight {...props} />
    }

    const TextElement = element

    return <TextElement className={cn(className)} ref={ref} {...props} />
  }
)
Text.displayName = 'Text'

export {Text}
