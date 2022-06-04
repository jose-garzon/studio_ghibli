import { FC, InputHTMLAttributes } from 'react'
import './styles.css'

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  type,
  className = '',
  autoFocus,
  ...rest
}) => {
  return (
    <input
      type={type}
      autoFocus={autoFocus}
      className={`custom_input ${className}`}
      {...rest}
    />
  )
}

export { Input }
