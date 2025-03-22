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
      <div className="main-container">
        <div className="greet">
            <p><span>Hello!</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest scripting mechanism to be used while working on so</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>How to define a function in a script</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Concepts of System Design in brief with examples in detail.</p>
                <img src={assets.message} alt="" />
            </div>
            <div className="card">
                <p>How often do you think Web3, Blockchain, and AI will be used in the next 5 years?</p>
                <img src={assets.code} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
