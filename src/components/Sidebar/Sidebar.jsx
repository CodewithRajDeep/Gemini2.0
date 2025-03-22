import React from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assest'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <img className='menu' src={assets.menu_icon} alt="" />
        <div className="new-chat">
            <img src={assets.plus_icon} alt="" />
            <p>New Chat</p>
        </div>
        <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
                <img src={assets.message} alt="" />
                <p>What is react ....</p>
            </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.question} alt="" />
            <p>Help</p>
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.history} alt="" />
            <p>Activity</p>
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.settings} alt="" />
            <p>Settings</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
