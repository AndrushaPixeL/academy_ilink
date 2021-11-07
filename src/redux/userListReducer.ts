import {
  createActionCreators,
  createReducerFunction,
  ImmerReducer,
} from 'immer-reducer'
import { GlobalState } from './type'

export type User = {
  gender: string
  name: string
}
export interface UsersListReducerInitialStateInt {
  users: Array<User>
}
export const UsersListReducerInitialState: UsersListReducerInitialStateInt = {
  users: [],
}

class UsersListReducer extends ImmerReducer<UsersListReducerInitialStateInt> {
  setUsers(users: Array<User>) {
    this.draftState.users = users
  }
}

export const UsersListActionCreater = createActionCreators(UsersListReducer)

export const UsersListSelectors = {
  getUsers: (state: GlobalState): Array<User> => state.usersList.users,
}

export const usersList = createReducerFunction(
  UsersListReducer,
  UsersListReducerInitialState
)

export default UsersListReducer
