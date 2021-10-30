import React, { FC } from 'react'
import Message from '../../atoms/Message/Message'
import NoSelectChatNotice from '../../atoms/NoSelectChatNotice/NoSelectChatNotice'
import './Chat.scss'

const Chat: FC = () => {
  const noSelectedChat = false
  const classNameMyMessage = 'chat_myMessage'
  const classNameYourMessage = 'chat_yourMessage'
  return (
    <div className="chat_container">
      <div className="chat">
        {noSelectedChat ? (
          <div className="chat_noSelect_container">
            <NoSelectChatNotice />
          </div>
        ) : (
          <>
            <div className={classNameMyMessage}>
              <Message classNameMessage="myMessage" />
            </div>
            <div className={classNameYourMessage}>
              <Message classNameMessage="yourMessage" />
            </div>
            <div className={classNameMyMessage}>
              <Message classNameMessage="myMessage" />
            </div>
            <div className={classNameYourMessage}>
              <Message classNameMessage="yourMessage" />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Chat
