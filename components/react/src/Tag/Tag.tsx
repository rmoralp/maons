import {PropsWithChildren} from 'react'

import {cn} from '../utils/cn'
import {defaultStyles, stylesByColor, stylesBySize} from './styles'
import {TagColor, TagSize} from './types'

interface TagProps {
  color: TagColor
  size?: TagSize
}

const Tag = ({
  color = TagColor.primary,
  size = TagSize.sm,
  children
}: PropsWithChildren<TagProps>) => {
  return (
    <span
      className={cn(defaultStyles, stylesByColor[color], stylesBySize[size])}
    >
      {children}
    </span>
  )
}

export {Tag}
