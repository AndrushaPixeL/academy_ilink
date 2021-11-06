import { AuthReducerInitialStateInt } from './authReducer'
import { PersistedReducerInitialStateInt } from './persistreducer'

export type GlobalState = { auth: AuthReducerInitialStateInt } & {
  persist: PersistedReducerInitialStateInt
}
