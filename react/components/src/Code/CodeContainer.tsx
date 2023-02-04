import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {defaultContainerStyles} from './styles'
import {CodeContainerProps} from './types'

const CodeContainer = forwardRef<HTMLPreElement, CodeContainerProps>(
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
