import {ImgHTMLAttributes} from 'react'

export enum AvatarSize {
  lg = 'lg',
  md = 'md',
  sm = 'sm',
  xs = 'xs'
}

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: AvatarSize
}
