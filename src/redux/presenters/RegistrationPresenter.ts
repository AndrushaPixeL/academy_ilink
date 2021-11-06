import { useMemo, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useMappedState } from 'redux-react-hook'
import { IRegistrFormInputs } from '../../components/organisms/RegistrationForm/RegistrationForm'
import { authSelectors } from '../authReducer'
import { PersistedSelectors } from '../persistreducer'
import { getGenders, registration } from '../thunk/registration'
import { GlobalState } from '../type'

function useInitialization() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getGenders())
  }, [dispatch])
}
function useState() {
  const mapState = useCallback(
    (state: GlobalState) => ({
      isLoading: authSelectors.getIsLoading(state),
      genderOptions: authSelectors.getGenderOptions(state),
      token: PersistedSelectors.getToken(state),
    }),
    []
  )
  return useMappedState(mapState)
}
function useEventHandlers() {
  const dispatch = useDispatch()
  const eventHandlers = useMemo(
    () => ({
      handleSubmit: (formValues: IRegistrFormInputs) => {
        dispatch(registration(formValues))
      },
    }),
    []
  )

  return eventHandlers
}
export function useRegistrationPresenter() {
  useInitialization()
  const values = useState()
  const eventHandlers = useEventHandlers()

  return {
    values,
    eventHandlers,
  }
}
