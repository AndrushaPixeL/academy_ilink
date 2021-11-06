import React, { FC } from 'react'
import { BrowserRouter as Switch } from 'react-router-dom'
import AuthPage from '../pages/AuthPage/AuthPage'
import ChatsPage from '../pages/Chats/ChatsPage'
import { SCREENS } from './endpoints'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

export const Routes: FC = () => {
  const restricted = false
  return (
    <Switch>
      <PublicRoute
        loggedIn
        restricted
        component={AuthPage}
        path={SCREENS.SCREEN_LOGIN}
        exact
      />
      <PrivateRoute
        loggedIn
        component={ChatsPage}
        path={SCREENS.SCREEN_CHATS}
      />
    </Switch>
  )
}
