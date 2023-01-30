'use client'

import {ComponentPropsWithoutRef, ElementRef, forwardRef} from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import {CloseIcon} from '../Icons/Close'
import {cn} from '../utils/cn'

const Modal = Dialog.Root

const ModalTrigger = Dialog.Trigger

const ModalPortal = ({
  className,
  children,
  ...props
}: Dialog.DialogPortalProps) => (
  <Dialog.Portal className={cn(className)} {...props}>
    <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
      {children}
    </div>
  </Dialog.Portal>
)

ModalPortal.displayName = Dialog.Portal.displayName

const ModalOverlay = forwardRef<
  ElementRef<typeof Dialog.Overlay>,
  ComponentPropsWithoutRef<typeof Dialog.Overlay>
>(({className, children, ...props}, ref) => (
  <Dialog.Overlay
    className={cn('fixed inset-0 z-20 bg-black/50', className)}
    {...props}
    ref={ref}
  />
))

ModalOverlay.displayName = Dialog.Overlay.displayName

const ModalContent = forwardRef<
  ElementRef<typeof Dialog.Content>,
  ComponentPropsWithoutRef<typeof Dialog.Content>
>(({className, children, ...props}, ref) => (
  <ModalPortal>
    <ModalOverlay forceMount />
    <Dialog.Content
      ref={ref}
      className={cn(
        'fixed z-50',
        'w-[95vw] max-w-md rounded-lg p-4 md:w-full',
        'top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]',
        'bg-white dark:bg-gray-800',
        className
      )}
      {...props}
    >
      {children}
      <Dialog.Close
        className={cn(
          'absolute top-2 right-2 inline-flex items-center justify-center rounded-full p-1',
          'transition-all hover:bg-gray-100',
          'focus:ring-primary-500 focus:outline-none focus:ring focus:ring-opacity-75'
        )}
      >
        <CloseIcon className="h-6 w-6" />
        <span className="sr-only">Close</span>
      </Dialog.Close>
    </Dialog.Content>
  </ModalPortal>
))

ModalContent.displayName = Dialog.Content.displayName

const ModalTitle = forwardRef<
  ElementRef<typeof Dialog.Title>,
  ComponentPropsWithoutRef<typeof Dialog.Title>
>(({className, ...props}, ref) => (
  <Dialog.Title
    ref={ref}
    className={cn('text-lg font-medium text-gray-900 ', className)}
    {...props}
  />
))

ModalTitle.displayName = Dialog.Title.displayName

const ModalDescription = forwardRef<
  ElementRef<typeof Dialog.Description>,
  ComponentPropsWithoutRef<typeof Dialog.Description>
>(({className, ...props}, ref) => (
  <Dialog.Description
    ref={ref}
    className={cn('text-md mt-2 font-normal text-gray-700', className)}
    {...props}
  />
))

ModalDescription.displayName = Dialog.Description.displayName

export {Modal, ModalTrigger, ModalContent, ModalTitle, ModalDescription}
