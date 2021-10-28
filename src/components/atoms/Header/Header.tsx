import React, { FC } from 'react'
import logo from '../../../assets/images/Logo.png'
import account from '../../../assets/images/accountImage.png'
import './Header.scss'

const Header: FC = () => {
  return (
    <div className="header">
      <input
        type="image"
        src={logo}
        alt="logotype"
        className="header_logotype"
        onClick={() => console.log('Click Logotype')}
      />
      <input
        type="image"
        src={account}
        alt="account"
        className="header_account"
        onClick={() => console.log('Click Account')}
      />
    </div>
  )
}

export default Header
