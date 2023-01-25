import {PropsWithChildren} from 'react'

import {cn} from '../utils/cn'
import {defaultStyles, stylesByColor, stylesBySize} from './styles'
import {TagColor, TagProps, TagSize} from './types'

const Tag = ({
  children,
  className,
  color = TagColor.primary,
  size = TagSize.sm,
  ...props
}: PropsWithChildren<TagProps>) => {
  return (
    <span
      className={cn(
        defaultStyles,
        stylesByColor[color],
        stylesBySize[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export {Tag}
