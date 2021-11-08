import React, { FC, useState } from 'react'
import Input from '../../atoms/Input/Input'
import updateImage from '../../../assets/images/updateCaptcha.png'
import './Captcha.scss'

interface Captcha {
  register: () => void
  error?: string
  labelInput: string
}

const Captcha: FC<Captcha> = ({ register, error, labelInput }) => {
  const [imgKey, setImgKey] = useState('key')
  return (
    <div key={imgKey} className="captcha_container">
      <Input
        labelInput={labelInput}
        register={() => register()}
        error={error}
        placeholder="captcha"
      />
      <div className="captcha">
        <img
          src="http://109.194.37.212:93/api/auth/captcha"
          alt="captcha"
          className="captcha_image"
        />
      </div>
      <input
        type="image"
        alt="update"
        src={updateImage}
        onClick={() => {
          setImgKey((prev) => prev.split('').reverse().join(''))
        }}
        className="captcha_update"
      />
    </div>
  )
}

export default Captcha
