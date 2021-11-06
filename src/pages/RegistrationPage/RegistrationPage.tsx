import React, { FC } from 'react'
import MainContainer from '..'
import RegistrationForm from '../../components/organisms/RegistrationForm/RegistrationForm'
import './RegistrationPage.scss'

interface RegistrationPage {
  page: string
}

const RegistrationPage: FC<RegistrationPage> = ({ page }) => {
  return (
    <MainContainer>
      <div className="authPage_form">
        <RegistrationForm />
      </div>
    </MainContainer>
  )
}

export default RegistrationPage
