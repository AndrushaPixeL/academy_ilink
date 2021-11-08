import React, { FC } from 'react'
import { BrowserRouter as Switch } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import ChatsPage from '../pages/Chats/ChatsPage'
import { SCREENS } from './endpoints'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage'
import useAuth from '../hooks/useAuth'

export const Routes: FC = () => {
  const { isLogin } = useAuth()
  return (
    <Switch>
      <PublicRoute
        loggedIn={isLogin}
        restricted={isLogin}
        component={LoginPage}
        path={SCREENS.SCREEN_LOGIN}
        exact
      />
      <PublicRoute
        loggedIn={isLogin}
        restricted={isLogin}
        component={RegistrationPage}
        path={SCREENS.SCREEN_REGISTRATION}
        exact
      />
      <PrivateRoute
        loggedIn={isLogin}
        component={ChatsPage}
        path={SCREENS.SCREEN_CHATS}
      />
    </Switch>
  )
}
