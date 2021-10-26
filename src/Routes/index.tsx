import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TestForm from '../components/organisms/LoginForm'
import AuthPage from '../pages/AuthPage'
import { SCREENS } from './endpoints'

export const Routes: FC = () => {
  return (
    <Switch>
      <Route path={SCREENS.SCREEN_LOGIN} exact>
        <AuthPage page="qwerty" />
      </Route>
      <Route path="/form">
        <TestForm />
      </Route>
    </Switch>
  )
}
