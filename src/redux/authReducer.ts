import { createActionCreators, ImmerReducer } from 'immer-reducer'
import { GlobalState } from './store'
import { IGender } from './thunk/registration'

export interface AuthReducerInitialStateInt {
  isLogin: boolean
  isLoading: boolean
  genderOptions: Array<IGender>
}
export const AuthReducerInitialState: AuthReducerInitialStateInt = {
  isLogin: false,
  isLoading: false,
  genderOptions: [],
}

class AuthReducer extends ImmerReducer<AuthReducerInitialStateInt> {
  setIsLogin(isLogin: boolean) {
    this.draftState.isLogin = isLogin
  }

  setIsLoading(isLoading: boolean) {
    this.draftState.isLoading = isLoading
  }

  setGenderOptions(genderOptions: Array<IGender>) {
    this.draftState.genderOptions = genderOptions
  }
}

export const AuthActionCreater = createActionCreators(AuthReducer)

export const authSelectors = {
  getIsLogin: (state: GlobalState): boolean => state.isLogin,
  getIsLoading: (state: GlobalState): boolean => state.isLoading,
  getGenderOptions: (state: GlobalState): Array<IGender> => state.genderOptions,
}

export default AuthReducer
