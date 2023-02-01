import {HTMLAttributes} from 'react'

import * as T from '@radix-ui/react-toast'

export enum ToastStatus {
  success = 'success',
  error = 'error',
  warning = 'warning',
  info = 'info'
}

export interface IToast {
  id?: string
  title?: string
  description?: string
  duration?: number
  type?: 'foreground' | 'background'
  status?: ToastStatus
}

export interface ToastProps extends T.ToastProps, IToast {}

export type ToastContextProps = (toast: IToast) => void

export interface ToastIconProps extends HTMLAttributes<HTMLElement> {
  status?: ToastStatus
}
