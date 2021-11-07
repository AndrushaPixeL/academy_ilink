import React, { FC } from 'react'
import avatarMan from '../../../assets/images/avatarMan.png'
import avatarWoman from '../../../assets/images/avatarWoman.png'
import { User } from '../../../redux/userListReducer'
import './ChatPreview.scss'

interface ChatPreviewProps {
  user: User
}

const ChatPreview: FC<ChatPreviewProps> = ({ user }) => {
  const lastMessage = 'hi!'
  return (
    <div className="chatPreview">
      <input
        type="image"
        src={user.gender === 'female' ? avatarWoman : avatarMan}
        alt="ava"
        className="chatPreview_avatarImage"
      />
      <div className="chatPreview_info">
        <div className="chatPreview_info_name">{user.name}</div>
        <div className="chatPreview_info_lastMessage">{lastMessage}</div>
      </div>
    </div>
  )
}

export default ChatPreview
