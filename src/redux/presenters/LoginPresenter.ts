import { useMemo, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useMappedState } from 'redux-react-hook'
import { IFormInputs } from '../../components/organisms/LoginForm/LoginForm'
import { GlobalState } from '../type'
import { logIn } from '../thunk/registration'

function useInitialization() {
  const dispatch = useDispatch()
}
function useState() {
  const mapState = useCallback((state: GlobalState) => ({}), [])
  return useMappedState(mapState)
}
function useEventHandlers() {
  const dispatch = useDispatch()
  const eventHandlers = useMemo(
    () => ({
      handleSubmit: (formValues: IFormInputs) => {
        dispatch(logIn(formValues))
      },
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
