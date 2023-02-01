import {ToastStatus} from './types'
export const rootStyles = [
  'bg-white rounded-md shadow p-4 ',
  'flex items-center justify-between',
  'gap-x-4',
  ''
].join(' ')

export const viewportStyles = [
  'flex flex-col p-6 m-0 gap-3',
  'w-[390px] max-w-[100vw]',
  'fixed bottom-0 right-0 z-50',
  'outline-none'
].join(' ')

export const titleStyles = ['m-0 font-semibold text-sm'].join(' ')

export const descriptionStyles = ['m-0 text-gray-400 text-xs'].join(' ')

export const closeStyles = [
  'inline-flex text-gray-500 items-center justify-center rounded-full p-1',
  'transition-all hover:bg-gray-100',
  'focus:ring-primary-500 focus:outline-none focus:ring focus:ring-opacity-75'
].join(' ')

export const iconStyles = 'flex-shrink-0 '

export const iconStylesByStatus = {
  [ToastStatus.info]: `${iconStyles} text-blue-500 w-5 h-5`,
  [ToastStatus.error]: `${iconStyles} text-red-500 w-6 h-6`,
  [ToastStatus.warning]: `${iconStyles} text-yellow-500 w-6 h-6`,
  [ToastStatus.success]: `${iconStyles} text-green-500 w-5 h-5`
}
