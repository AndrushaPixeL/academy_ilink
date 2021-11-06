import { IFormInputs } from '../../components/organisms/RegistrationForm/RegistrationForm'
import { AuthActionCreater } from '../authReducer'

export type IGender = {
  genders: Array<{ id: string; gender: string }>
}

const authPath = 'http://109.194.37.212:93/api/auth/'

export const registration = (values: IFormInputs) => {
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
        gender_id: '2',
        captcha: '12345',
      }),
    })
      .then((response): Promise<Response> => {
        console.log('bodя')
        return response.json()
      })
      .catch((err) => {
        console.log(err)
      })
      .then((data) => {
        console.log(data, 'data')
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
      .then((response): Promise<IGender[]> => response.json())
      .then((data) => {
        dispatch(AuthActionCreater.setGenderOptions(data as IGender[]))
      })
      .catch((err) => {
        dispatch(AuthActionCreater.setIsLoading(false))
      })
  }
}
