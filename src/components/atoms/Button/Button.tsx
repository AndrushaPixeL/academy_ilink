import React, { FC } from 'react'
import './Button.scss'

interface ButtonProps {
  isDisabledButton?: boolean
  typeButton?: 'button' | 'submit' | 'reset'
  classNameButton?: string
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({
  isDisabledButton,
  typeButton,
  classNameButton,
  children,
  onClick,
}) => {
  return (
    <button
      type={typeButton}
      className={classNameButton}
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
