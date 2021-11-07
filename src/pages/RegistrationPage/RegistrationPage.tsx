import React, { FC } from 'react'
import MainContainer from '..'
import RegistrationForm from '../../components/organisms/RegistrationForm/RegistrationForm'
import './RegistrationPage.scss'
import { useRegistrationPresenter } from '../../redux/presenters/RegistrationPresenter'

interface RegistrationPage {
  page: string
}

const RegistrationPage: FC<RegistrationPage> = ({ page }) => {
  const { values, eventHandlers } = useRegistrationPresenter()

  return (
    <MainContainer>
      <div className="authPage_form">
        <RegistrationForm
          onSubmit={eventHandlers.handleSubmit}
          handleRedirect={eventHandlers.handleRedirect}
          genderOptions={values.genderOptions}
          isLoading={values.isLoading}
        />
      </div>
    </MainContainer>
  )
}

export default RegistrationPage
