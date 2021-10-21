import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FieldError, useForm } from 'react-hook-form'

import Button from '../atoms/Button/Button'
import Input from '../atoms/Input/Input'

export interface IFormInputs {
  firstName: string
  password: number
}
export interface FormErrors {
  firstName?: FieldError | undefined
  password?: FieldError | undefined
}

const schema = yup
  .object({
    firstName: yup.string().required().min(4).max(14),
    password: yup
      .string()
      .required()
      .min(8)
      .max(16)
      .matches(/^[a-zA-Z0-9]+$/i),
  })
  .required()

const TestForm: React.FunctionComponent = () => {
  //test functional
  const [disabledButton, setDisabledButton] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: IFormInputs): void => console.log('Submit', data)

  const buttonAction = (): void => {
    console.log(123123)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        labelInput="User name"
        register={register}
        error={errors.firstName?.message}
        nameInput="firstName"
      />
      <Input
        labelInput="Password"
        register={register}
        error={errors.password?.message}
        nameInput="password"
      />
      <Button
        disabledButton={disabledButton}
        textButton="Login In"
        buttonAction={buttonAction}
      />
    </form>
  )
}

export default TestForm
