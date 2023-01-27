// export const defaultStyles = [''].join(' ')
import {HeadingElement} from './types'

export const defaultStyles = 'font-semibold'

export const stylesByElement = {
  [HeadingElement.h1]: 'text-4xl',
  [HeadingElement.h2]: 'text-3xl',
  [HeadingElement.h3]: 'text-2xl',
  [HeadingElement.h4]: 'text-xl',
  [HeadingElement.h5]: 'text-lg',
  [HeadingElement.h6]: 'text-md'
}
