import {LiHTMLAttributes, OlHTMLAttributes} from 'react'

export interface ListProps extends OlHTMLAttributes<HTMLUListElement> {}

export interface OrderedListProps extends OlHTMLAttributes<HTMLOListElement> {}

export interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {}
