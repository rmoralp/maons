import {AlertStatus} from './types'

export const defaultStyles = [
  'relative w-full rounded',
  'flex items-center gap-3',
  'px-4 py-3'
].join(' ')

export const textStyles = 'text-md'

export const stylesByStatus = {
  [AlertStatus.info]: 'bg-blue-100',
  [AlertStatus.error]: 'bg-red-100',
  [AlertStatus.warning]: 'bg-yellow-100',
  [AlertStatus.success]: 'bg-green-100'
}

export const iconStyles = 'flex-shrink-0 '

export const iconStylesByStatus = {
  [AlertStatus.info]: `${iconStyles} bg-blue-100 text-blue-500 w-5 h-5`,
  [AlertStatus.error]: `${iconStyles} bg-red-100 text-red-500 w-6 h-6`,
  [AlertStatus.warning]: `${iconStyles} bg-yellow-100 text-yellow-500 w-6 h-6`,
  [AlertStatus.success]: `${iconStyles} bg-green-100 text-green-500 w-5 h-5`
}
