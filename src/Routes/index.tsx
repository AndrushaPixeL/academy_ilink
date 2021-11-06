import React, { FC } from 'react'
import { BrowserRouter as Switch } from 'react-router-dom'
import AuthPage from '../pages/AuthPage/AuthPage'
import ChatsPage from '../pages/Chats/ChatsPage'
import { SCREENS } from './endpoints'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage'

export const Routes: FC = () => {
  return (
    <Switch>
      <PublicRoute
        loggedIn={false}
        restricted={true}
        component={AuthPage}
        path={SCREENS.SCREEN_LOGIN}
        exact
      />
      <PublicRoute
        loggedIn={false}
        restricted={true}
        component={RegistrationPage}
        path={SCREENS.SCREEN_REGISTRATION}
        exact
      />
      <PrivateRoute
        loggedIn={false}
        component={ChatsPage}
        path={SCREENS.SCREEN_CHATS}
      />
    </Switch>
  )
}
