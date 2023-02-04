export const isOnBrowser = typeof window !== 'undefined'

export const isIntersectionObserverEnabled =
  isOnBrowser &&
  'IntersectionObserver' in window &&
  'IntersectionObserverEntry' in window &&
  'intersectionRatio' in window.IntersectionObserverEntry.prototype &&
  'isIntersecting' in window.IntersectionObserverEntry.prototype
