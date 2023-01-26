export const defaultStyles = [
  'relative',
  'appearance-none bg-white border border-gray-300',
  'w-4 h-4 text-blue-600 ',
  'rounded',
  'focus:ring-blue-500 focus:ring-2 focus:ring-offset-2',
  'checked:bg-blue-600 checked:border-transparent',
  'after:content-["✓"] after:text-white after:text-sm',
  'after:absolute after:top-2/4 after:left-2/4 after:-translate-y-1/2 after:-translate-x-1/2',
  'transition-all'
].join(' ')

export const invalidStyles =
  'border border-red-500 border-2 checked:border-red-500'

export const disabledStyles =
  'disabled:bg-gray-100 disabled:cursor-not-allowed disabled:checked:after:text-slate-400 disabled:after:text-gray-100 disabled:checked:border-gray-300'
