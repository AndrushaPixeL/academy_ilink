import React, { FC } from 'react'
import MainContainer from '..'
import LoginForm from '../../components/organisms/LoginForm/LoginForm'
import './AuthPage.scss'
import { useLoginPresenter } from '../../redux/presenters/LoginPresenter'

interface AuthPage {
  page: string
}

const AuthPage: FC<AuthPage> = ({ page }) => {
  const { values, eventHandlers } = useLoginPresenter()
  return (
    <MainContainer>
      <div className="authPage_form">
        <LoginForm onSubmit={eventHandlers.handleSubmit} />
      </div>
    </MainContainer>
  )
}

export default AuthPage
