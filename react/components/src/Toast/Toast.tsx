import * as T from '@radix-ui/react-toast'

import {CloseIcon} from '../Icons/Close'
import {cn} from '../utils/cn'
import {
  closeStyles,
  descriptionStyles,
  rootStyles,
  titleStyles,
  viewportStyles
} from './styles'
import {ToastIcon} from './ToastIcon'
import {ToastProps} from './types'

export const Provider = T.Provider

export const Viewport = () => <T.Viewport className={viewportStyles} />

export const Toast = ({
  description,
  duration = 5000,
  status,
  title,
  ...props
}: ToastProps) => {
  return (
    <T.Root className={rootStyles} duration={duration} {...props}>
      {status && <ToastIcon status={status} />}
      <div>
        <T.Title className={cn(titleStyles)}>{title}</T.Title>
        <T.Description className={cn(descriptionStyles)}>
          {description}
        </T.Description>
      </div>
      <T.Close asChild>
        <div className={closeStyles}>
          <CloseIcon className="h-6 w-6 cursor-pointer" />
        </div>
      </T.Close>
    </T.Root>
  )
}
