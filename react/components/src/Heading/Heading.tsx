import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {defaultStyles, stylesByElement} from './styles'
import {HeadingElement, HeadingProps} from './types'

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({as: element = HeadingElement.h1, className, ...props}, ref) => {
    const HeadingElement = element
    return (
      <HeadingElement
        className={cn(defaultStyles, stylesByElement[element], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Heading.displayName = 'Heading'

export {Heading}
