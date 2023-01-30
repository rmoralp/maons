import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {defaultStyles, stylesByElement} from './styles'
import {HeadingElement, HeadingProps} from './types'

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({as: element, className, ...props}, ref) => {
    const Component = element || HeadingElement.h1
    return (
      <Component
        className={cn(defaultStyles, stylesByElement[element], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Heading.displayName = 'Heading'

export {Heading}
