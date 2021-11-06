/* eslint-disable camelcase */
import React, { FC, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useHistory } from 'react-router'
import { FieldError, useForm } from 'react-hook-form'
import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import './RegistrationForm.scss'
import { IGender } from '../../../redux/thunk/registration'

export interface IRegistrFormInputs {
  login: string
  password: string
  password_confirm: string
  name: string
  gender_id: string
  captcha: string
}
export interface FormErrors {
  login?: FieldError | undefined
  password?: FieldError | undefined
  password_confirm?: FieldError | undefined
  name?: FieldError | undefined
  captcha?: string
}
interface Props {
  isLoading: boolean
  genderOptions: IGender[]
  onSubmit: (formValues: IRegistrFormInputs) => void
}

const schema = yup
  .object({
    login: yup.string().required().min(4).max(14),
    password: yup
      .string()
      .required()
      .min(8)
      .max(16)
      .matches(/^[a-zA-Z0-9]+$/i),
    password_confirm: yup
      .string()
      .required()
      .min(8)
      .max(16)
      .matches(/^[a-zA-Z0-9]+$/i),
    name: yup.string().required().min(4).max(14),
  })
  .required()

const LoginForm: FC<Props> = ({ isLoading, genderOptions, onSubmit }) => {
  const [imgKey, setImgKey] = useState('key')
  const history = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrFormInputs>({
    resolver: yupResolver(schema),
  })

  if (isLoading) {
    return <>loading</>
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs_container">
          <Input
            labelInput="User name"
            register={() => register('login')}
            error={errors.login?.message}
            placeholder="Input user name"
          />
          <Input
            labelInput="Create password"
            register={() => register('password')}
            error={errors.password?.message}
            placeholder="Create password"
          />
          <Input
            labelInput="Password confirmation"
            register={() => register('password_confirm')}
            error={errors.password?.message}
            placeholder="Password confirmation"
          />
          <Input
            labelInput="name"
            register={() => register('name')}
            error={errors.name?.message}
            placeholder="name"
          />
        </div>
        <div key={imgKey}>
          <img
            src="http://109.194.37.212:93/api/auth/captcha"
            alt="ошиб очка"
          />
          <Input
            labelInput="captcha"
            register={() => register('captcha')}
            error={errors.name?.message}
            placeholder="captcha"
          />
          <Button
            onClick={() => {
              setImgKey((prev) => prev.split('').reverse().join(''))
            }}
          >
            обновить
          </Button>
        </div>
        <Button typeButton="submit" classNameButton="button">
          Login
        </Button>
      </form>
    </>
  )
}

export default LoginForm
