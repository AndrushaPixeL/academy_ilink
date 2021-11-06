import React, { FC } from 'react'
import { StoreContext } from 'redux-react-hook'
import { Provider } from 'react-redux'
import { Routes } from './Routes'
import { store } from './redux/store'
import './App.css'

const App: FC = () => {
  return (
    <StoreContext.Provider value={store}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </StoreContext.Provider>
  )
}

export default App
