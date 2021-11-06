import { useCallback, useMemo } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import {
  PersistedSelectors,
  PersistedActionCreater,
} from '../redux/persistreducer'
import { GlobalState } from '../redux/type'

const useAuth = function useState() {
  const mapState = useCallback(
    (state: GlobalState) => ({
      isLogin: PersistedSelectors.getIsLogin(state),
      token: PersistedSelectors.getToken(state),
    }),
    []
  )
  function useEventHandlers() {
    const dispatch = useDispatch()
    const eventHandlers = useMemo(
      () => ({
        signOut: () => {
          dispatch(PersistedActionCreater.signOut())
        },
      }),
      []
    )

    return eventHandlers
  }
  const { isLogin, token } = useMappedState(mapState)
  const { signOut } = useEventHandlers()

  return { isLogin, token, signOut }
}

export default useAuth
