import React, { FC, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useHistory } from 'react-router'
import { FieldError, useForm } from 'react-hook-form'
import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import './RegistrationForm.scss'

export interface IFormInputs {
  firstName: string
  createPassword: string
  passwordConfirmation: string
  nickname: string
}
export interface FormErrors {
  firstName?: FieldError | undefined
  createPassword?: FieldError | undefined
  passwordConfirmation?: FieldError | undefined
  nickname?: FieldError | undefined
}

const schema = yup
  .object({
    firstName: yup.string().required().min(4).max(14),
    createPassword: yup
      .string()
      .required()
      .min(8)
      .max(16)
      .matches(/^[a-zA-Z0-9]+$/i),
    passwordConfirmation: yup
      .string()
      .required()
      .min(8)
      .max(16)
      .matches(/^[a-zA-Z0-9]+$/i),
    nickname: yup.string().required().min(4).max(14),
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
            register={() => register('firstName')}
            error={errors.firstName?.message}
            placeholder="Input user name"
          />
          <Input
            labelInput="Create password"
            register={() => register('createPassword')}
            error={errors.createPassword?.message}
            placeholder="Create password"
          />
          <Input
            labelInput="Password confirmation"
            register={() => register('passwordConfirmation')}
            error={errors.createPassword?.message}
            placeholder="Password confirmation"
          />
          <Input
            labelInput="Nickname"
            register={() => register('nickname')}
            error={errors.nickname?.message}
            placeholder="Nickname"
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
