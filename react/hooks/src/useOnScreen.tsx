import {RefObject, useEffect, useRef, useState} from 'react'

import {isIntersectionObserverEnabled} from './utils/browser'

interface UseOnScreenOptions {
  initialValue?: boolean
  rootMargin?: string
  once?: boolean
  ref?: RefObject<HTMLElement>
}

export const useOnScreen = ({
  initialValue = false,
  rootMargin = '0px',
  once = true,
  ref
}: UseOnScreenOptions) => {
  // State and setter for storing whether element is visible or not
  const [isIntersecting, setIntersecting] = useState(initialValue)
  const outerRef = useRef()

  useEffect(() => {
    const usableRef = ref || outerRef
    const {current} = usableRef || {}

    if (!current) return

    let observer
    ;(isIntersectionObserverEnabled
      ? Promise.resolve()
      : import('intersection-observer')
    ).then(() => {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting)

          if (entry.isIntersecting) {
            // Unobserve now if we've set once option
            once && observer && observer.unobserve(current)
          }
        },
        {
          rootMargin
        }
      )

      current && observer.observe(current)
    })

    return () => {
      observer && observer.unobserve(current)
    }
  }, [rootMargin, once, ref])

  return [isIntersecting, outerRef]
}
