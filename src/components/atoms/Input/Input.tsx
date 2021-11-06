import React, { FC } from 'react'
import './Input.scss'

interface InputProps {
  labelInput: string
  register: () => void
  error: string | undefined
  placeholder: string
}
const getClassNames = (error: string | undefined): string => {
  if (error) {
    return 'input input_error'
  }
  return 'input'
}

const Input: FC<InputProps> = ({
  labelInput,
  register,
  error,
  placeholder,
}) => {
  const classNames = React.useMemo(() => {
    return getClassNames(error)
  }, [error])

  return (
    <div className="input_container">
      <div className="input_label">{labelInput}</div>
      <input
        {...register()}
        type="text"
        className={classNames}
        placeholder={placeholder}
      />
      <div className="error_message">{error}</div>
    </div>
  )
}

export default Input
