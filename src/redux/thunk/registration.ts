/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { IFormInputs } from '../../components/organisms/LoginForm/LoginForm'
import { IRegistrFormInputs } from '../../components/organisms/RegistrationForm/RegistrationForm'
import { SCREENS } from '../../Routes/endpoints'
import { AuthActionCreater } from '../authReducer'
import { PersistedActionCreater } from '../persistreducer'

export type IGenderFields = {
  id: string
  gender: string
}

export type IGender = {
  genders: Array<IGenderFields>
}

const authPath = 'http://109.194.37.212:93/api/auth/'

export const registration = (
  values: IRegistrFormInputs,
  goToLogin: () => void
) => {
  console.log(9999999, values)
  return (dispatch: (callback: any) => void) => {
    fetch(`${authPath}register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        login: values.login,
        password: values.password,
        password_confirm: values.password_confirm,
        name: values.name,
        gender_id: values.gender_id,
        captcha: '12345',
      }),
    })
      .then((response): Promise<Response> => {
        return response.json()
      })
      .catch((err) => {
        console.log(err)
      })
      .then((data) => {
        console.log(data, 'data')
        if (data) goToLogin()
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const logIn = (values: IFormInputs) => {
  return (dispatch: (callback: any) => void) => {
    fetch(`${authPath}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        login: values.firstName,
        password: values.password,
        captcha: '12345',
      } as any),
    })
      .then((response): Promise<string> => {
        return response.json()
      })
      .then((token) => {
        dispatch(PersistedActionCreater.setToken(token))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const getGenders = () => {
  return (dispatch: (callback: any) => void) => {
    dispatch(AuthActionCreater.setIsLoading(true))
    fetch(`${authPath}`, {})
      .then((response): Promise<IGender> => response.json())
      .then((data) => {
        dispatch(AuthActionCreater.setGenderOptions(data as IGender))
      })
      .catch((err) => {
        dispatch(AuthActionCreater.setIsLoading(false))
      })
  }
}
