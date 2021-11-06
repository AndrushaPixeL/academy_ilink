import React, { FC } from 'react'
import { Redirect, Route, RouteProps } from 'react-router'
import { SCREENS } from './endpoints'

type Props = {
  loggedIn: boolean
  component: React.ElementType
} & RouteProps

const PrivateRoute: FC<Props> = ({
  loggedIn,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={SCREENS.SCREEN_LOGIN} />
        )
      }}
    />
  )
}

export default PrivateRoute
