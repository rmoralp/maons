import {ErrorIcon} from '../Icons/Error'
import {InfoIcon} from '../Icons/Info'
import {SuccessIcon} from '../Icons/Success'
import {WarningIcon} from '../Icons/Warning'
import {cn} from '../utils/cn'
import {iconStylesByStatus} from './styles'
import {ToastIconProps, ToastStatus} from './types'

const iconsByStatus = {
  [ToastStatus.error]: ErrorIcon,
  [ToastStatus.info]: InfoIcon,
  [ToastStatus.success]: SuccessIcon,
  [ToastStatus.warning]: WarningIcon
}

const ToastIcon = ({status, ...props}: ToastIconProps) => {
  const Icon = iconsByStatus[status]

  if (!Icon) return null

  return <Icon className={iconStylesByStatus[status]} {...props} />
}

ToastIcon.displayName = 'ToastIcon'

export {ToastIcon}
