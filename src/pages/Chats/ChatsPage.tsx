import React, { FC } from 'react'
import Header from '../../components/atoms/Header/Header'
import Chat from '../../components/organisms/Chat/Chat'
import ChatInput from '../../components/organisms/ChatInput/ChatInput'
import Dialogs from '../../components/organisms/Dialogs/Dialogs'

import './ChatsPage.scss'

const ChatsPage: FC = () => {
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
