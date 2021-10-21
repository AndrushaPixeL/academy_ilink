import React, { useState } from 'react'
import Button from './atoms/Button/Button'
import './App.css'

const App: React.FunctionComponent = () => {
  //test functional
  const [disabledButton, setDisabledButton] = useState(false)
  const textButton = 'Login In'
  const buttonAction = (): void => {
    console.log(123123)
  }

  return (
    <div className="App">
      <Button
        disabledButton={disabledButton}
        textButton={textButton}
        buttonAction={buttonAction}
      />
    </div>
  )
}

export default App
