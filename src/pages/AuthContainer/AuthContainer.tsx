import React, { ReactElement } from 'react'
import logo from '../../assets/images/Logo.png'

interface AuthContainer {
  heading: string
}

const AuthContainer: React.FC<AuthContainer> = ({ children, heading }) => {
  return (
    <div className="authPage">
      <div className="auth_container">
        <div className="greeting_container">
          <div className="greeting">
            <img src={logo} alt="logotype" className="authPage_logo" />
            <div>
              <span className="authPage_title">Wellcome to </span>
              <span className="authPage_title chatty">Chatty</span>
              <span className="authPage_title exclamation">!</span>
              <h2>{heading}</h2>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default AuthContainer
