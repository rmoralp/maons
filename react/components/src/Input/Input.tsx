import {cn} from '../utils/cn'
import {
  defaultStyles,
  disabledStyles,
  invalidStyles,
  stylesBySize
} from './styles'
import {InputSize} from './types'

interface InputProps {
  className?: string
  disabled?: boolean
  id?: string
  isInvalid?: boolean
  labelText?: string
  maxlength?: number
  minlength?: number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
  pattern?: string
  required?: boolean
  size?: InputSize
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  value?: string
  [x: string]: any
}

const Input = ({
  className,
  disabled, //
  id,
  isInvalid,
  labelText,
  maxlength,
  minlength,
  onChange,
  onInput,
  onClick,
  name,
  pattern,
  placeholder,
  required,
  size = InputSize.md,
  type = 'text',
  value,
  ...rest
}: InputProps) => {
  return (
    <input
      aria-label={labelText}
      className={cn(
        defaultStyles,
        disabledStyles,
        stylesBySize[size],
        isInvalid && invalidStyles,
        className
      )}
      id={id}
      disabled={disabled}
      maxLength={maxlength}
      minLength={minlength}
      onChange={onChange}
      onInput={onInput}
      onClick={onClick}
      name={name}
      pattern={pattern}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
      {...rest}
    />
  )
}

export {Input}
