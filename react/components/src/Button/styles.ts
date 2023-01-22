import {ButtonColor, ButtonSize, ButtonVariant} from './types'

export const defaultStyles = 'rounded-md shadow transition-all'

export const stylesBySize = {
  [ButtonSize.xs]: 'py-1 px-2 text-xs',
  [ButtonSize.sm]: 'py-1 px-3 text-sm',
  [ButtonSize.md]: 'py-2 px-6 text-md',
  [ButtonSize.lg]: 'py-3 px-10 text-lg'
}

export const styleButtonDisabled =
  'disabled:bg-gray-300 disabled:text-gray-500 shadow-none cursor-not-allowed border-gray-300'

export const styleOutline = 'border border-gray-300'

export const stylesByColor = {
  [ButtonVariant.solid]: {
    [ButtonColor.primary]:
      'bg-primary-500 hover:bg-opacity-90 text-white shadow',
    [ButtonColor.secondary]:
      'bg-secondary-500 hover:bg-opacity-90 text-white shadow',
    [ButtonColor.success]:
      'bg-emerald-500 hover:bg-opacity-90 text-white shadow',
    [ButtonColor.error]: 'bg-red-500 hover:bg-opacity-90 text-white shadow'
  },
  [ButtonVariant.outline]: {
    [ButtonColor.primary]:
      'border border-primary-500 text-border-500 text-primary-500 hover:bg-primary-50 hover:bg-opacity-90',
    [ButtonColor.secondary]:
      'border border-secondary-500 text-border-500 text-secondary-500 hover:bg-secondary-50 hover:bg-opacity-90',
    [ButtonColor.success]:
      'border border-emerald-500 text-border-500 text-emerald-500 hover:bg-emerald-50 hover:bg-opacity-90',
    [ButtonColor.error]:
      'border border-red-500 text-border-500 text-red-500 hover:bg-red-50 hover:bg-opacity-90'
  },
  [ButtonVariant.ghost]: {
    [ButtonColor.primary]:
      'hover:bg-primary-100 hover:bg-opacity-90 text-primary-500',
    [ButtonColor.secondary]:
      'hover:bg-secondary-100 hover:bg-opacity-90 text-secondary-500',
    [ButtonColor.success]:
      'hover:bg-emerald-100 hover:bg-opacity-90 text-emerald-500',
    [ButtonColor.error]: 'hover:bg-red-100 hover:bg-opacity-90 text-red-500'
  },
  [ButtonVariant.link]: {
    [ButtonColor.primary]:
      'shadow-none hover:underline text-primary-500 py-0 px-0',
    [ButtonColor.secondary]:
      'shadow-none hover:underline text-secondary-500 py-0 px-0',
    [ButtonColor.success]:
      'shadow-none hover:underline text-emerald-500 py-0 px-0',
    [ButtonColor.error]: 'shadow-none hover:underline text-red-500 py-0 px-0'
  }
}
