import React, { FC } from 'react'
import './Button.scss'

interface ButtonProps {
  isDisabledButton?: boolean
  typeButton: 'button' | 'submit' | 'reset'
  classNameButton: string
}

const Button: FC<ButtonProps> = ({
  isDisabledButton,
  typeButton,
  classNameButton,
  children,
}) => {
  return (
    <button
      type={typeButton}
      className={classNameButton}
      disabled={isDisabledButton}
    >
      {children}
    </button>
  )
}
Button.defaultProps = {
  isDisabledButton: false,
}
export default Button
