import React, { FC, useEffect } from 'react'
import Header from '../../components/atoms/Header/Header'
import Chat from '../../components/organisms/Chat/Chat'
import ChatInput from '../../components/organisms/ChatInput/ChatInput'
import Dialogs from '../../components/organisms/Dialogs/Dialogs'
import useAuth from '../../hooks/useAuth'
import { useChatContainerPresenter } from '../../redux/presenters/ChatContainerPresenter'
import useWS from '../../service/useWs'

import './ChatsPage.scss'

const ChatsPage: FC = () => {
  const { token } = useAuth()
  const { getData, connectionStatus } = useWS(token)
  const { values, eventHandlers } = useChatContainerPresenter()
  useEffect(() => {
    getData('UserList')
  }, [token, connectionStatus])

  return (
    <div className="chatsPage">
      <Header />
      <div className="chatsPage_container">
        <Dialogs users={values.userList} />
        <div className="chatsPage_chat_container">
          <Chat />
          <ChatInput />
        </div>
      </div>
    </div>
  )
}

export default ChatsPage
