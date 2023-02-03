import {useOnScreen} from './useOnScreen'

export const useNearScreen = ({initialValue = false, rootMargin = '200px'}) => {
  return useOnScreen({once: true, rootMargin, initialValue})
}
