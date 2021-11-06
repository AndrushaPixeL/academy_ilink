import { useMemo, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useMappedState } from 'redux-react-hook'
import { IFormInputs } from '../../components/organisms/RegistrationForm/RegistrationForm'
import { authSelectors } from '../authReducer'
import { GlobalState } from '../store'
import { getGenders, registration } from '../thunk/registration'

function useInitialization() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getGenders())
  }, [dispatch])
}
function useState() {
  const mapState = useCallback(
    (state: GlobalState) => ({
      isLogin: authSelectors.getIsLogin(state),
      isLoading: authSelectors.getIsLoading(state),
      genderOptions: authSelectors.getGenderOptions(state),
    }),
    []
  )
  return useMappedState(mapState)
}
function useEventHandlers() {
  const dispatch = useDispatch()
  const eventHandlers = useMemo(
    () => ({
      handleSubmit: (formValues: IFormInputs) => {
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
