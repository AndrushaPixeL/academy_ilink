import { useMemo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useMappedState } from 'redux-react-hook'
import { GlobalState } from '../type'
import { UsersListSelectors } from '../userListReducer'

function useInitialization() {
  const dispatch = useDispatch()
}
function useState() {
  const mapState = useCallback(
    (state: GlobalState) => ({
      userList: UsersListSelectors.getUsers(state),
    }),
    []
  )
  return useMappedState(mapState)
}
function useEventHandlers() {
  const dispatch = useDispatch()
  const eventHandlers = useMemo(() => ({}), [])

  return eventHandlers
}
export function useChatContainerPresenter() {
  useInitialization()
  const values = useState()
  const eventHandlers = useEventHandlers()

  return {
    values,
    eventHandlers,
  }
}
