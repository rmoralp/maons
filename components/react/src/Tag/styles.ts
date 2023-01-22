import {TagColor, TagSize} from './types'

export const defaultStyles = 'inline-block rounded-md truncate transition-all'

// `truncate rounded-lg bg-orange-200 px-2 text-sm text-orange-900 ${dynamicClassNames}`

export const stylesBySize = {
  [TagSize.xs]: 'py-0 px-2 text-xs',
  [TagSize.sm]: 'py-0 px-2 text-sm',
  [TagSize.md]: 'py-0 px-2 text-md',
  [TagSize.lg]: 'py-0 px-2 text-lg'
}

export const stylesByColor = {
  [TagColor.gray]:
    'border border-gray-400 text-border-500 text-gray-500 bg-gray-100',
  [TagColor.primary]:
    'border border-primary-500 text-border-500 text-primary-500 bg-primary-50',
  [TagColor.secondary]:
    'border border-secondary-500 text-border-500 text-secondary-500 bg-secondary-50',
  [TagColor.success]:
    'border border-emerald-500 text-border-500 text-emerald-500 bg-emerald-50',
  [TagColor.error]:
    'border border-red-500 text-border-500 text-red-500 bg-red-50'
}
