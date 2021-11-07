import React, { FC } from 'react'
import './Button.scss'

interface ButtonProps {
  isDisabledButton?: boolean
  typeButton?: 'button' | 'submit' | 'reset'
  variant?: 'standart' | 'outlined'
  className?: string
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({
  isDisabledButton,
  typeButton,
  children,
  className,
  variant = 'standart',
  onClick,
}) => {
  return (
    <button
      type={typeButton}
      className={`button ${variant} ${className}`}
      disabled={isDisabledButton}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
Button.defaultProps = {
  isDisabledButton: false,
}
export default Button
