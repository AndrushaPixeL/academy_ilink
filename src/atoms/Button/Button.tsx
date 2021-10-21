import React from 'react'
import './Button.scss'

interface ButtonProps {
  disabledButton: boolean
  textButton: string
  buttonAction: () => void
}

const Button: React.FunctionComponent<ButtonProps> = ({
  disabledButton,
  textButton,
  buttonAction,
}) => {
  return (
    <div>
      <button
        type="button"
        className="button"
        disabled={disabledButton}
        onClick={buttonAction}
      >
        {textButton}
      </button>
    </div>
  )
}

export default Button
