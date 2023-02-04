import {ParamHTMLAttributes, QuoteHTMLAttributes} from 'react'

export interface BlockquoteProps
  extends QuoteHTMLAttributes<HTMLQuoteElement> {}

export interface BlockquoteContentProps
  extends ParamHTMLAttributes<HTMLParagraphElement> {}

export interface BlockquoteCiteProps
  extends QuoteHTMLAttributes<HTMLQuoteElement> {}
