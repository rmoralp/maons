export enum ButtonSize {
  lg = 'lg',
  md = 'md',
  sm = 'sm',
  xs = 'xs'
}

export enum ButtonVariant {
  link = 'link',
  outline = 'outline',
  solid = 'solid',
  ghost = 'ghost'
}

export enum ButtonColor {
  error = 'error',
  primary = 'primary',
  secondary = 'secondary',
  success = 'success'
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: ButtonColor
  size?: ButtonSize
  variant?: ButtonVariant
}
