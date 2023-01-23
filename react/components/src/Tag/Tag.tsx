import {PropsWithChildren} from 'react'

import {cn} from '../utils/cn'
import {defaultStyles, stylesByColor, stylesBySize} from './styles'
import {TagColor, TagSize} from './types'

interface TagProps {
  className?: string
  color: TagColor
  labelText?: string
  size?: TagSize
}

const Tag = ({
  children,
  className,
  color = TagColor.primary,
  labelText,
  size = TagSize.sm
}: PropsWithChildren<TagProps>) => {
  return (
    <span
      className={cn(
        defaultStyles,
        stylesByColor[color],
        stylesBySize[size],
        className
      )}
      aria-label={labelText}
    >
      {children}
    </span>
  )
}

export {Tag}
