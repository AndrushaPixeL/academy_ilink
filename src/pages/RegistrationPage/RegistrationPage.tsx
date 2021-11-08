import React, { FC } from 'react'
import AuthContainer from '../AuthContainer/AuthContainer'
import RegistrationForm from '../../components/organisms/RegistrationForm/RegistrationForm'
import { useRegistrationPresenter } from '../../redux/presenters/RegistrationPresenter'
import './RegistrationPage.scss'

interface RegistrationPage {
  page: string
}

const RegistrationPage: FC<RegistrationPage> = ({ page }) => {
  const { values, eventHandlers } = useRegistrationPresenter()
  const registrationHeading = 'Registration'

  return (
    <AuthContainer heading={registrationHeading}>
      <div className="authPage_form">
        <RegistrationForm
          onSubmit={eventHandlers.handleSubmit}
          handleRedirect={eventHandlers.handleRedirect}
          genderOptions={values.genderOptions}
          isLoading={values.isLoading}
        />
      </div>
    </AuthContainer>
  )
}

export default RegistrationPage
