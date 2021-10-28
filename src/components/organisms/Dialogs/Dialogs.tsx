import React, { FC } from 'react'
import noUser from '../../../assets/images/NoUsersImage.png'
import ChatPreview from '../../atoms/ChatPreview/ChatPreview'
import './Dialogs.scss'

const Dialogs: FC = () => {
  const users = true
  return (
    <div className="dialogs">
      {users ? (
        <div>
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
        </div>
      ) : (
        <div className="dialogs_coUserImg_container">
          <img src={noUser} alt="No users" className="dialogs_coUserImg" />
          <p className="dialogs_coUserMessage">There is no other users yet</p>
        </div>
      )}
    </div>
  )
}

export default Dialogs
