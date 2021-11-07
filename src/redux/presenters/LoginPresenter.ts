import { useMemo, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useMappedState } from 'redux-react-hook'
import { useHistory } from 'react-router'
import { IFormInputs } from '../../components/organisms/LoginForm/LoginForm'
import { GlobalState } from '../type'
import { logIn } from '../thunk/registration'
import { SCREENS } from '../../Routes/endpoints'

function useInitialization() {
  const dispatch = useDispatch()
}
function useState() {
  const mapState = useCallback((state: GlobalState) => ({}), [])
  return useMappedState(mapState)
}
function useEventHandlers() {
  const dispatch = useDispatch()
  const history = useHistory()
  const eventHandlers = useMemo(
    () => ({
      handleSubmit: (formValues: IFormInputs) => {
        dispatch(logIn(formValues))
      },
      handleRedirect: () => history.push(SCREENS.SCREEN_REGISTRATION),
    }),
    []
  )

  return eventHandlers
}
export function useLoginPresenter() {
  useInitialization()
  const values = useState()
  const eventHandlers = useEventHandlers()

  return {
    values,
    eventHandlers,
  }
}
