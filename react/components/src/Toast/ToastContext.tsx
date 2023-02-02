import {createContext, useState} from 'react'

import {Provider, Toast, Viewport} from './Toast'
import {IToast, ToastContextProps} from './types'

export const ToastContext = createContext({} as ToastContextProps)

export const ToastProvider = ({children}: PropsWithChildren) => {
  const [toasts, setToasts] = useState<IToast[]>([])

  const addToast = (toast: IToast) => {
    if (!toast.id) {
      toast.id = Math.random().toString(36).slice(2) // Example: "7qcy1m4uiur"
      setToasts(currentToasts => [...currentToasts, toast])
    } else {
      const toastExists = toasts.some(t => t.id === toast.id)
      if (!toastExists) {
        setToasts(currentToasts => [...currentToasts, toast])
      }
    }
  }

  return (
    <ToastContext.Provider value={addToast}>
      <Provider>
        {children}
        {toasts.map(toast => {
          return (
            <Toast
              key={toast.id}
              onOpenChange={open => {
                if (!open) {
                  setTimeout(() => {
                    setToasts(currentToasts =>
                      currentToasts.filter(t => t.id !== toast.id)
                    )
                  }, 100) // Wait for the hide animation to finish
                }
              }}
              onSwipeEnd={() => {
                setToasts(currentToasts =>
                  currentToasts.filter(t => t.id !== toast.id)
                ) // Avoid hide animation when closing the toast by swiping
              }}
              {...toast}
            />
          )
        })}
        <Viewport />
      </Provider>
    </ToastContext.Provider>
  )
}
