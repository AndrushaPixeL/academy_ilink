import {
  createActionCreators,
  createReducerFunction,
  ImmerReducer,
} from 'immer-reducer'
import { IGender } from './thunk/registration'
import { GlobalState } from './type'

export interface AuthReducerInitialStateInt {
  isLoading: boolean
  genderOptions: IGender
}
export const AuthReducerInitialState: AuthReducerInitialStateInt = {
  isLoading: false,
  genderOptions: { genders: [] },
}

class AuthReducer extends ImmerReducer<AuthReducerInitialStateInt> {
  setIsLoading(isLoading: boolean) {
    this.draftState.isLoading = isLoading
  }

  setGenderOptions(genderOptions: IGender) {
    this.draftState.genderOptions = genderOptions
    this.draftState.isLoading = false
  }
}

export const AuthActionCreater = createActionCreators(AuthReducer)

export const authSelectors = {
  getIsLoading: (state: GlobalState): boolean => state.auth.isLoading,
  getGenderOptions: (state: GlobalState): IGender => state.auth.genderOptions,
}

export const auth = createReducerFunction(AuthReducer, AuthReducerInitialState)

export default AuthReducer
