import React, { FC, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useHistory } from 'react-router'
import { FieldError, useForm } from 'react-hook-form'
import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import './LoginForm.scss'

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

const LoginForm: FC = () => {
  const history = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })
  const onSubmit = (): void => history.push('/chats')

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs_container">
          <Input
            labelInput="User name"
            register={register}
            error={errors.firstName?.message}
            nameInput="firstName"
            placeholder="Input user name"
          />
          <Input
            labelInput="Password"
            register={register}
            error={errors.password?.message}
            nameInput="password"
            placeholder="Input password"
          />
        </div>
        <Button typeButton="submit" classNameButton="button">
          Login
        </Button>
      </form>
    </>
  )
}

export default LoginForm
