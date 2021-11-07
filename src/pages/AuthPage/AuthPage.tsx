import React, { FC } from 'react'
import MainContainer from '..'
import LoginForm from '../../components/organisms/LoginForm/LoginForm'
import { useLoginPresenter } from '../../redux/presenters/LoginPresenter'
import './AuthPage.scss'

interface AuthPage {
  page: string
}

const AuthPage: FC<AuthPage> = ({ page }) => {
  const { values, eventHandlers } = useLoginPresenter()
  return (
    <MainContainer>
      <div className="authPage_form">
        <LoginForm
          onSubmit={eventHandlers.handleSubmit}
          handleRedirect={eventHandlers.handleRedirect}
        />
      </div>
    </MainContainer>
  )
}

export default AuthPage
