import React, { FC } from 'react'
import './Button.scss'

interface ButtonProps {
  isDisabledButton: boolean
  buttonAction: () => void
  typeButton: 'button' | 'submit' | 'reset'
  classNameButton: string
}

const Button: FC<ButtonProps> = ({
  isDisabledButton,
  buttonAction,
  typeButton,
  classNameButton,
  children,
}) => {
  return (
    <button
      type={typeButton}
      className={classNameButton}
      disabled={isDisabledButton}
      onClick={buttonAction}
    >
      {children}
    </button>
  )
}

export default Button
