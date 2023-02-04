import {useOnScreen} from './useOnScreen'

interface UseNearScreenOptions {
  initialValue?: boolean
  rootMargin?: string
}

export const useNearScreen = ({
  initialValue = false,
  rootMargin = '200px'
}: UseNearScreenOptions) => useOnScreen({once: true, rootMargin, initialValue})
