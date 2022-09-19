import React from 'react'
import './About.css'

function About() {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://images.pexels.com/photos/3692625/pexels-photo-3692625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">
          About Me
          </h1>
          <p className="a-sub">
          Filler text is text that shares some characteristics of a real written text, but is random or otherwise
          </p>
          <p className="a-desc">
          Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail
          </p>
          <div className="a-award">
            <img src="https://images.pexels.com/photos/6532373/pexels-photo-6532373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">International</h4>
              <p className="a-award-desc">
              Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.
              </p>
            </div>

          </div>
        </div>


    </div>
  )
}

export default About