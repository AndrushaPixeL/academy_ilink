import React, { FC } from 'react'
import clipImage from '../../../assets/images/ClipImage.png'
import arrowImage from '../../../assets/images/arrowImage.png'
import './ChatInput.scss'

const ChatInput: FC = () => {
  return (
    <div className="chatInput">
      <input
        type="image"
        src={clipImage}
        alt="clip"
        className="chatInput_clip"
      />
      <textarea
        placeholder="Write something..."
        className="chatInput_input"
        rows={2}
      />
      <input
        type="image"
        src={arrowImage}
        alt="send"
        className="chatInput_arrow"
      />
    </div>
  )
}

export default ChatInput
