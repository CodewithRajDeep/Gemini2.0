import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assest'
import { Context } from '../../context/Context'

const Main = () => {
  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini2.0</p>
            <img src={assets.user1_icon} alt="" />
        </div>
      <div className="main-container">

        {!showResult ? 
        <>
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
        </> : 
        <div className='result'>
          <div className="result-title">
             <img src={assets.user1_icon} alt="" />
             <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? <div className='loader'>
                <hr />
                <hr />
                <hr />
              </div> :  <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
            </div>
        </div> }
        
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt'
            onKeyDown={(e) => {
              if(e.key === 'Enter' &&  input.trim() != '') {
                onSent();
              }
            }} />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic} alt="" />
              {input ? <img onClick={() => onSent()}src={assets.send} alt="" /> : null} 
            </div>
          </div>
          <p className="bottom-info">
            Gemini at highload time may provide inaccurate info, double check its response.Gemini Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
