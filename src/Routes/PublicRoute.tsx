import React, { FC } from 'react'
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router'
import { SCREENS } from './endpoints'

type Props = {
  loggedIn: boolean
  restricted: boolean
  component: React.ElementType
} & RouteProps

const PublicRoute: FC<Props> = ({
  loggedIn,
  restricted,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return loggedIn && restricted ? (
          <Redirect to={SCREENS.SCREEN_CHATS} />
        ) : (
          <Component {...props} />
        )
      }}
    />
  )
}

export default PublicRoute
