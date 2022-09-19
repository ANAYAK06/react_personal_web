import React from 'react'
import './Intro.css'
import me from '../../img/profile-pic.jpeg'

function Intro() {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, My Name is</h2>
                <h1 className='i-name'>Anoop Narayanan</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-items">Web Developer</div>
                        <div className="i-title-items">Accountant</div>
                        <div className="i-title-items">App Tester</div>
                    </div>

                </div>
                <p className="i-desc">
                What is a dummy test?
So, a dummy test (or dummy exam) means it doesn't count. You are only doing it to make sure the tool is working fine. It's like saying, “let's do a pretend test.” In theory, you could call it a mock. But, mock
                </p>
            </div>
             
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={me} alt="" className="i-img" />
        </div>
    </div>
  )
}

export default Intro