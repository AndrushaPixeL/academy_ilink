import React, { FC } from 'react'
import Message from '../../atoms/Message/Message'
import NoSelectChatNotice from '../../atoms/NoSelectChatNotice/NoSelectChatNotice'
import './Chat.scss'

const Chats: FC = () => {
  const noSelectedChat = false

  return (
    <div className="chat">
      {noSelectedChat ? (
        <div className="chat_noSelect_container">
          <NoSelectChatNotice />
        </div>
      ) : (
        <>
          <div className="chat_myMessage">
            <Message />
          </div>
          <div className="chat_myMessage">
            <Message />
          </div>
        </>
      )}
    </div>
  )
}

export default Chats
