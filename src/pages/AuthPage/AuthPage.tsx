import React, { FC } from 'react'
import MainContainer from '..'
import logo from '../../assets/images/Logo.png'
import LoginForm from '../../components/organisms/LoginForm/LoginForm'
import './AuthPage.scss'

interface AuthPage {
  page: string
}

const AuthPage: FC<AuthPage> = ({ page }) => {
  return (
    <MainContainer>
      <div className="authPage_form">
        <LoginForm />
      </div>
    </MainContainer>
  )
}

export default AuthPage
