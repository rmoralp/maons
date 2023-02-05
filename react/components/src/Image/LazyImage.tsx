// @ts-nocheck
import {PropsWithChildren} from 'react'

import {useNearScreen} from '@maons/react-hooks'

import {LazyImageProps} from './types'
const isNumericSize = size => !/[^\d]+/.exec(size)

const getSize = size => (isNumericSize ? `${size}px` : size)

export const LazyImage = ({
  children,
  rootMargin = '100px 0px 0px',
  height
}: PropsWithChildren<LazyImageProps>) => {
  const [isNearScreen, fromRef] = useNearScreen({rootMargin})
  const emptyContentStyle = {
    height: height ? getSize(height) : '0px',
    marginBottom: '1px'
  }

  if (isNearScreen) {
    return <>{children}</>
  }

  return <div ref={fromRef} style={emptyContentStyle} />
}
