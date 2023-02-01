import {PropsWithChildren} from 'react'

import {cn} from '../utils/cn'
import {textStyles} from './styles'
import {AlertDescriptionProps} from './types'

const AlertDescription = ({
  className,
  children,
  ...props
}: PropsWithChildren<AlertDescriptionProps>) => {
  return (
    <span className={cn([textStyles, className])} {...props}>
      {children}
    </span>
  )
}

AlertDescription.displayName = 'AlertDescription'

export {AlertDescription}
