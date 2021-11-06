import { applyMiddleware, createStore } from 'redux'
import { createReducerFunction } from 'immer-reducer'
import thunk from 'redux-thunk'
import AuthReducer, {
  AuthReducerInitialStateInt,
  AuthReducerInitialState,
} from './authReducer'

export type GlobalState = AuthReducerInitialStateInt

const reducerFunction = createReducerFunction(
  AuthReducer,
  AuthReducerInitialState
)

export const store = createStore(reducerFunction, applyMiddleware(thunk))
