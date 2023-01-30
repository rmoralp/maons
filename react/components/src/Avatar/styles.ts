import {AvatarSize} from './types'

export const defaultStyles = ['rounded-full object-cover'].join(' ')

export const stylesBySize = {
  [AvatarSize.xs]: 'w-8 h-8',
  [AvatarSize.sm]: 'w-12 h-12',
  [AvatarSize.md]: 'w-16 w-16',
  [AvatarSize.lg]: 'w-20 h-20'
}
