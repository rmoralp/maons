import {forwardRef} from 'react'

import {cn} from '../utils/cn'
import {LazyImage} from './LazyImage'
import {defaultStyles} from './styles'
import {ImageProps} from './types'

const BOTS_USER_AGENTS = [
  'googlebot',
  'google-structured-data-testing-tool',
  'bingbot',
  'linkedinbot',
  'mediapartners-google',
  'googlebot-image',
  'googlebot-news',
  'googlebot-video'
]

const isBotService = userAgent => {
  return userAgent
    ? BOTS_USER_AGENTS.some(ua => userAgent.toLowerCase().includes(ua))
    : false
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({className, userAgent, loading, ...props}, ref) => {
    const hasUserAgent = Boolean(userAgent)
    const isBot = hasUserAgent && isBotService(userAgent)
    const isLazy = loading === 'lazy'

    const Image = (
      <img
        className={cn(defaultStyles, className)}
        loading={loading}
        ref={ref}
        {...props}
      />
    )

    // For bots or not lazy loading images
    if (!hasUserAgent || isBot || !isLazy) return Image

    const {height, rootMargin} = props

    return (
      <LazyImage height={height} rootMargin={rootMargin}>
        {Image}
      </LazyImage>
    )
  }
)

Image.displayName = 'Image'

export {Image}
