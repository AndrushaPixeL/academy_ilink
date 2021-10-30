import React, { FC } from 'react'
import './Message.scss'

interface Message {
  classNameMessage: string
}

const Message: FC<Message> = ({ classNameMessage }) => {
  return (
    <div className={classNameMessage}>
      <div className="message_text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        incidunt ipsam ducimus quidem quae minima nemo veritatis distinctio
        asperiores beatae fugit provident eaque aperiam, voluptas tenetur ullam
        odio animi odit!
      </div>
    </div>
  )
}

export default Message
