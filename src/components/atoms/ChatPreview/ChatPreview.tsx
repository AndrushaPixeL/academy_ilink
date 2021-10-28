import React, { FC } from 'react'
import avatarMan from '../../../assets/images/avatarMan.png'
import './ChatPreview.scss'

const ChatPreview: FC = () => {
  const name = 'Konstantin Konstantinopol'
  const lastMessage = 'hi!'
  return (
    <div className="chatPreview">
      <input
        type="image"
        src={avatarMan}
        alt="ava"
        className="chatPreview_avatarImage"
      />
      <div className="chatPreview_info">
        <div className="chatPreview_info_name">{name}</div>
        <div className="chatPreview_info_lastMessage">{lastMessage}</div>
      </div>
    </div>
  )
}

export default ChatPreview
