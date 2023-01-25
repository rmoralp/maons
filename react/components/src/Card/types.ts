import {ElementType, HTMLAttributes} from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType
  className?: string
  hoverable?: boolean
}
