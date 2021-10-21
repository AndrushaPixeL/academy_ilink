import React, { useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { IFormInputs, FormErrors } from '../../organisms/TestForm'
import './Input.scss'

interface InputProps {
  labelInput: string
  register: UseFormRegister<IFormInputs>
  error: string | undefined
  nameInput: 'firstName' | 'password'
}

const Input: React.FunctionComponent<InputProps> = ({
  labelInput,
  register,
  error,
  nameInput,
}) => {
  if (error) {
    console.log(12312)
  }
  return (
    <div className="input_container">
      <div className="input_label">{labelInput}</div>
      <input
        {...register(nameInput)}
        type="text"
        className={error ? 'input + input_error' : 'input'}
      />
      <div className="error_message">{error}</div>
    </div>
  )
}

export default Input
