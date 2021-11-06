import React, { ReactElement } from 'react'
import logo from '../assets/images/Logo.png'

const MainContainer: React.FC = ({ children }) => {
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
              <h2>Please, autorize yourself</h2>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default MainContainer
