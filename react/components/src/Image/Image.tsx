import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {defaultStyles} from './styles'
import {ImageProps} from './types'

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({className, ...props}, ref) => {
    return <img className={cn(defaultStyles, className)} ref={ref} {...props} />
  }
)

Image.displayName = 'Image'

export {Image}
