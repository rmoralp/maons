import {InputSize} from './types'

export const defaultStyles = [
  'relative w-full  border-0 bg-white',
  'text-slate-600 placeholder-slate-300',
  'rounded shadow outline-none',
  'focus:outline-none focus:ring',
  'transition-all'
].join(' ')

export const stylesBySize = {
  [InputSize.sm]: 'px-2 py-1 text-sm',
  [InputSize.md]: 'py-3 px-3 text-sm',
  [InputSize.lg]: 'py-3 px-4 text-base'
}

export const invalidStyles = 'border border-red-500 border-2'

export const disabledStyles = 'disabled:bg-gray-100 disabled:cursor-not-allowed'
