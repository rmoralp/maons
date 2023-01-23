import {ElementType, PropsWithChildren} from 'react'

import {cn} from '../utils/cn'

interface CardBodyProps {
  as?: ElementType
  className?: string
}

const element = 'div'

const CardBody = ({
  as: Element = element,
  children,
  className
}: PropsWithChildren<CardBodyProps>) => {
  return <Element className={cn('px-3 py-2', className)}>{children}</Element>
}

export {CardBody}
