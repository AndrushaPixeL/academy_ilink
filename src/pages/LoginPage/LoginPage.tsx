import React, { FC } from 'react'
import AuthContainer from '../AuthContainer/AuthContainer'
import LoginForm from '../../components/organisms/LoginForm/LoginForm'
import { useLoginPresenter } from '../../redux/presenters/LoginPresenter'
import './LoginPage.scss'

interface LoginPage {
  page: string
}

const LoginPage: FC<LoginPage> = ({ page }) => {
  const { values, eventHandlers } = useLoginPresenter()
  const loginHeading = 'Please, autorize yourself'
  return (
    <AuthContainer heading={loginHeading}>
      <div className="authPage_form">
        <LoginForm
          onSubmit={eventHandlers.handleSubmit}
          handleRedirect={eventHandlers.handleRedirect}
        />
      </div>
    </AuthContainer>
  )
}

export default LoginPage
