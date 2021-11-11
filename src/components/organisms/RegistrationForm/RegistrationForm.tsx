/* eslint-disable camelcase */
import React, { FC } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FieldError, useForm } from 'react-hook-form'
import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import { IGender } from '../../../redux/thunk/registration'
import Captcha from '../../molecules/Captcha/Captcha'
import Select from '../../atoms/Select/Select'

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
  genderOptions: IGender
  onSubmit: (formValues: IRegistrFormInputs) => void
  handleRedirect: () => void
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
    gender: yup.number(),
  })
  .required()

const RegistrationForm: FC<Props> = ({
  isLoading,
  genderOptions,
  onSubmit,
  handleRedirect,
}) => {
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
            labelInput="Nickname"
            register={() => register('name')}
            error={errors.name?.message}
            placeholder="Nickname"
          />
        </div>
        <Select
          genders={genderOptions}
          register={() => register('gender_id')}
        />
        <Captcha
          register={() => register('captcha')}
          error={errors.captcha?.message}
          labelInput="captcha"
        />
        <div className="buttons_container">
          <Button typeButton="submit">Registration</Button>
          <Button
            typeButton="button"
            variant="outlined"
            onClick={handleRedirect}
          >
            Login
          </Button>
        </div>
      </form>
    </>
  )
}

export default RegistrationForm
