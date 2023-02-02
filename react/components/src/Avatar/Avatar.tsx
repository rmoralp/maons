import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {defaultStyles, stylesBySize} from './styles'
import {AvatarProps, AvatarSize} from './types'

const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({className, size = AvatarSize.md, ...props}, ref) => {
    return (
      <img
        className={cn(defaultStyles, stylesBySize[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Avatar.displayName = 'Avatar'

export {Avatar}
