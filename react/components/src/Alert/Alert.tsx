import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactElement
} from 'react'

import {cn} from '../utils/cn'
import {defaultStyles, stylesByStatus} from './styles'
import {AlertProps} from './types'

const Alert = ({
  className,
  children,
  status,
  ...props
}: PropsWithChildren<AlertProps>) => {
  const forwardProps = child => {
    if (isValidElement(child as ReactElement)) {
      return cloneElement(child as ReactElement, {status})
    }

    return child
  }

  return (
    <div
      className={cn([defaultStyles, stylesByStatus[status], className])}
      {...props}
      role="alert"
    >
      {Children.toArray(children).map(forwardProps)}
    </div>
  )
}

Alert.displayName = 'Alert'

export {Alert}
