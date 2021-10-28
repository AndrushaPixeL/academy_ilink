import React, { FC } from 'react'
import NoSelectChatNotice from '../NoSelectChatNotice/NoSelectChatNotice'
import './Chat.scss'

const Chats: FC = () => {
  const noSelectedChat = true
  return (
    <div className="chats">
      {noSelectedChat ? (
        <div className="chats_noSelect_container">
          <NoSelectChatNotice />
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Chats
