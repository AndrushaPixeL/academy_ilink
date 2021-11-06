import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { StoreContext } from 'redux-react-hook'
import './App.css'
// eslint-disable-next-line import/extensions
import { persistor, store } from './redux/store'
import { Routes } from './Routes'

const App: FC = () => {
  return (
    <StoreContext.Provider value={store}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </StoreContext.Provider>
  )
}

export default App
