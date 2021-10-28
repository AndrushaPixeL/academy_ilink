import React, { FC } from 'react'
import Header from '../../components/atoms/Header/Header'
import Dialogs from '../../components/atoms/Dialogs/Dialogs'
import Chats from '../../components/atoms/Chats/Chats'

import './ChatsPage.scss'

interface ChatsPageProps {
  page: string
}

const ChatsPage: FC<ChatsPageProps> = ({ page }) => {
  const testDialogs = [
    { name: 'Konstantin', surname: 'Konstantinopolski' },
    { name: 'Asdadada', surname: 'ADsasdda' },
    { name: 'ZCXCZxczxc', surname: 'ZCzxczczczcz' },
  ]
  return (
    <div className="chatsPage">
      <Header />
      <div className="chatsPage_container">
        <Dialogs />
        <Chats />
      </div>
    </div>
  )
}

export default ChatsPage
