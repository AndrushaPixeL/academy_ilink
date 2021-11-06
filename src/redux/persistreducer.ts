import {
  createActionCreators,
  createReducerFunction,
  ImmerReducer,
} from 'immer-reducer'
import { GlobalState } from './type'

export interface PersistedReducerInitialStateInt {
  token: string | null
  isLogin: boolean
}
export const PersistedReducerInitialState: PersistedReducerInitialStateInt = {
  token: null,
  isLogin: false,
}

class PersistedReducer extends ImmerReducer<PersistedReducerInitialStateInt> {
  setIsLogin(isLogin: boolean) {
    this.draftState.isLogin = isLogin
  }

  setToken(token: string | null) {
    this.draftState.token = token
  }
}

export const PersistedActionCreater = createActionCreators(PersistedReducer)

export const PersistedSelectors = {
  getIsLogin: (state: GlobalState): boolean => state.persist.isLogin,
  getToken: (state: GlobalState): string | null => state.persist.token,
}

export const persist = createReducerFunction(
  PersistedReducer,
  PersistedReducerInitialState
)

export default PersistedReducer
