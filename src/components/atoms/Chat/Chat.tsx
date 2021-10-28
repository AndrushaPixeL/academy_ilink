import React, { FC } from 'react'
import Message from '../Message/Message'
import NoSelectChatNotice from '../NoSelectChatNotice/NoSelectChatNotice'
import './Chat.scss'

const Chats: FC = () => {
  const noSelectedChat = false

  return (
    <div className="chats">
      {noSelectedChat ? (
        <div className="chats_noSelect_container">
          <NoSelectChatNotice />
        </div>
      ) : (
        <>
          <div className="chats_myMessage">
            <Message />
          </div>
          <div className="chats_myMessage">
            <Message />
          </div>
        </>
      )}
    </div>
  )
}

export default Chats
