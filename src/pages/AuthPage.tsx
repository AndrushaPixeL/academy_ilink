import React, { FC } from 'react'
import LoginForm from '../components/organisms/LoginForm'
import './AuthPage.scss'
import logo from '../assets/images/LogoLogin.png'

interface AuthPage {
  page: string
}

const AuthPage: FC<AuthPage> = ({ page }) => {
  return (
    <div className="authPage">
      <div className="auth_container">
        <img src={logo} alt="logotype" className="authPage_logo" />
        <div>
          <span className="authPage_title">Wellcome to </span>
          <span className="authPage_title chatty">Chatty</span>
          <span className="authPage_title exclamation">!</span>
          <h2>Please, autorize yourself</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

export default AuthPage
