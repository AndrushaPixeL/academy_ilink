import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthPage from '../pages/AuthPage/AuthPage'
import ChatsPage from '../pages/Chats/ChatsPage'
import { SCREENS } from './endpoints'

export const Routes: FC = () => {
  return (
    <Switch>
      <Route path={SCREENS.SCREEN_LOGIN} exact>
        <AuthPage page="qwerty" />
      </Route>
      <Route path={SCREENS.SCREEN_CHATS}>
        <ChatsPage />
      </Route>
    </Switch>
  )
}
