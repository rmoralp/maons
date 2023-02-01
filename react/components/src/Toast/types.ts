import * as T from '@radix-ui/react-toast'

export enum ToastColors {
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
  status?: ToastColors
}

export interface ToastProps extends T.ToastProps, IToast {}

export type ToastContextProps = (toast: IToast) => void
