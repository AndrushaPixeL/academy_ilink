import React, { FC } from 'react'
import logo from '../../../assets/images/Logo.png'
import account from '../../../assets/images/accountImage.png'
import useAuth from '../../../hooks/useAuth'
import './Header.scss'

const Header: FC = () => {
  const { signOut } = useAuth()
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
        onClick={signOut}
      />
    </div>
  )
}

export default Header
