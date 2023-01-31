import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {defaultContainerStyles} from './styles'
import {CodeProps} from './types'

const CodeContainer = forwardRef<HTMLElement, CodeProps>(
  ({className, ...props}, ref) => {
    return (
      <pre
        className={cn(defaultContainerStyles, className)}
        ref={ref}
        {...props}
      />
    )
  }
)
CodeContainer.displayName = 'CodeContainer'

export {CodeContainer}
