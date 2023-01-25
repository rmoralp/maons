import {PropsWithChildren} from 'react'

import {cn} from '../utils/cn'
import {CardProps} from './types'

const element = 'div'

const Card = ({
  as: Element = element,
  className,
  children,
  hoverable = false,
  ...props
}: PropsWithChildren<CardProps>) => {
  return (
    <Element
      className={cn(
        'rounded bg-white shadow',
        hoverable && 'transition-all hover:shadow-lg',
        className
      )}
      {...props}
    >
      {children}
    </Element>
  )
}

export {Card}
