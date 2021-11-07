import React, { FC, useCallback, useEffect, useState } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import Header from '../../components/atoms/Header/Header'
import Chat from '../../components/organisms/Chat/Chat'
import ChatInput from '../../components/organisms/ChatInput/ChatInput'
import Dialogs from '../../components/organisms/Dialogs/Dialogs'
import useAuth from '../../hooks/useAuth'

import './ChatsPage.scss'

const ChatsPage: FC = () => {
  const { token } = useAuth()

  const [socketUrl, setSocketUrl] = useState(
    `ws://109.194.37.212:2346/?type=test&ws_id=${token}`
  )
  const [messageHistory, setMessageHistory] = useState([])

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    shouldReconnect: (closeEvent) => true,
  })

  useEffect(() => {
    console.log(lastMessage, 'lastMessage')
  }, [lastMessage, setMessageHistory])

  const handleClickChangeSocketUrl = useCallback(() => setSocketUrl(''), [])

  const handleClickSendMessage = useCallback(() => sendMessage('Hello'), [])

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState]

  useEffect(() => {
    setSocketUrl(`ws://109.194.37.212:2346/?type=test&ws_id=${token}`)
  }, [token])

  console.log(connectionStatus, 'connectionStatus')
  const handleSendMessage = () => {
    sendMessage(JSON.stringify({ type: 'user_data' }))
  }

  return (
    <div className="chatsPage">
      <Header />
      <div className="chatsPage_container">
        <Dialogs />
        <div className="chatsPage_chat_container">
          <Chat />
          <ChatInput />
        </div>
      </div>
    </div>
  )
}

export default ChatsPage
