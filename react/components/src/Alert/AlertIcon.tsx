import {ErrorIcon} from '../Icons/Error'
import {InfoIcon} from '../Icons/Info'
import {SuccessIcon} from '../Icons/Success'
import {WarningIcon} from '../Icons/Warning'
import {cn} from '../utils/cn'
import {iconStylesByStatus} from './styles'
import {AlertIconProps, AlertStatus} from './types'

const iconsByStatus = {
  [AlertStatus.error]: ErrorIcon,
  [AlertStatus.info]: InfoIcon,
  [AlertStatus.success]: SuccessIcon,
  [AlertStatus.warning]: WarningIcon
}

const AlertIcon = ({className, status, ...props}: AlertIconProps) => {
  const Icon = iconsByStatus[status]

  if (!Icon) return null

  return (
    <Icon className={cn([iconStylesByStatus[status], className])} {...props} />
  )
}

AlertIcon.displayName = 'AlertIcon'

export {AlertIcon}
