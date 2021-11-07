import { AuthReducerInitialStateInt } from './authReducer'
import { PersistedReducerInitialStateInt } from './persistreducer'
import { UsersListReducerInitialStateInt } from './userListReducer'

export type GlobalState = { auth: AuthReducerInitialStateInt } & {
  persist: PersistedReducerInitialStateInt
} & { usersList: UsersListReducerInitialStateInt }
