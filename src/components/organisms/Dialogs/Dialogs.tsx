import React, { FC } from 'react'
import noUser from '../../../assets/images/NoUsersImage.png'
import { User } from '../../../redux/userListReducer'
import ChatPreview from '../../atoms/ChatPreview/ChatPreview'
import './Dialogs.scss'

interface DialogsProps {
  users: Array<User>
}

const Dialogs: FC<DialogsProps> = ({ users }) => {
  return (
    <div className="dialogs_container">
      {users.length ? (
        <div className="dialogs">
          {users.map((user) => {
            return <ChatPreview user={user} key={user.name} />
          })}
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
