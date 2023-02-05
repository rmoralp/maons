import {HTMLAttributes, ImgHTMLAttributes} from 'react'

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  rootMargin?: string
  userAgent?: string
}

export interface LazyImageProps extends HTMLAttributes<HTMLDivElement> {
  rootMargin?: string
  height?: string | number
}
