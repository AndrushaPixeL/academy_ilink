import { applyMiddleware, combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { auth } from './authReducer'
import { persist } from './persistreducer'
import { usersList } from './userListReducer'

const persistConfig = {
  key: 'persist',
  // eslint-disable-next-line object-shorthand
  storage: storage,
  whitelist: ['persist'], // only navigation will be persisted
}

const rootPersistConfig = {
  key: 'root',
  // eslint-disable-next-line object-shorthand
  storage: storage,
  whitelist: ['persist'],
}

const rootReducer = combineReducers({
  auth,
  persist: persistReducer(persistConfig, persist),
  usersList,
})

export const store = createStore(
  persistReducer(rootPersistConfig, rootReducer),
  applyMiddleware(thunk)
)
export const persistor = persistStore(store)
