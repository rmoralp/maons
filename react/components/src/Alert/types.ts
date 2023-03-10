import {HTMLAttributes, SVGAttributes} from 'react'

export enum AlertStatus {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error'
}

export interface AlertProps extends HTMLAttributes<HTMLElement> {
  status?: AlertStatus
}

export interface AlertDescriptionProps extends HTMLAttributes<HTMLElement> {}

export interface AlertIconProps extends SVGAttributes<HTMLOrSVGElement> {
  status?: AlertStatus
}
