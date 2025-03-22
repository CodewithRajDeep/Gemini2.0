import React from 'react'
import './Main.css'
import { assets } from '../../assets/assest'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini2.0</p>
            <img src={assets.user1_icon} alt="" />
        </div>
      
    </div>
  )
}

export default Main
