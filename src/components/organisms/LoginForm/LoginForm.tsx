import React, { FC, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FieldError, useForm } from 'react-hook-form'
import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import Captcha from '../../molecules/Captcha/Captcha'
import './LoginForm.scss'

export interface IFormInputs {
  firstName: string
  password: number
  securityCode: string
}
export interface FormErrors {
  firstName?: FieldError | undefined
  password?: FieldError | undefined
  securityCode?: FieldError | undefined
}
interface Props {
  onSubmit: (values: IFormInputs) => void
  handleRedirect: () => void
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
    securityCode: yup.string().required().min(4),
  })
  .required()

const LoginForm: FC<Props> = ({ onSubmit, handleRedirect }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })
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
            labelInput="Password"
            register={() => register('password')}
            error={errors.password?.message}
            placeholder="Input password"
          />
        </div>
        <Captcha
          register={() => register('securityCode')}
          error={errors.securityCode?.message}
          labelInput="Security code"
        />
        <div className="buttons_container">
          <Button typeButton="submit">Login</Button>
          <Button
            typeButton="button"
            onClick={handleRedirect}
            variant="outlined"
          >
            Registration
          </Button>
        </div>
      </form>
    </>
  )
}

export default LoginForm
