import {HTMLAttributes} from 'react'

export enum TextElement {
  abbr = 'abbr',
  b = 'b',
  cite = 'cite',
  del = 'del',
  em = 'em',
  i = 'i',
  ins = 'ins',
  kbd = 'kbd',
  mark = 'mark',
  p = 'p',
  s = 's',
  samp = 'samp',
  small = 'small',
  span = 'span',
  strong = 'strong',
  sub = 'sub',
  sup = 'sup',
  time = 'time',
  u = 'u'
}

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: TextElement
}
