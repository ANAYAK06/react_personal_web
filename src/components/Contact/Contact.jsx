import React, { useRef } from 'react'
import './Contact.css'
import phone from "../../img/phone.png"
import email from "../../img/email.png"
import address from "../../img/address.png"
import emailjs from '@emailjs/browser';
import { useState } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../context'

function Contact() {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_fvmkcsh', 
        'template_2lae3jk',
        formRef.current, 'EOHq_MFlfcVPWYSAJ')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });


    };
  return (
    <div className='c'>
        <div className="c-bg">

        </div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-titile">
                    Let's Discuss
                </h1>
                <div className="c-info">
                    <div className="c-info-items">
                        <img src={phone} alt="" className='c-icon' /> +91 9179 524 069
                    </div>
                </div>
                <div className="c-info">
                    <div className="c-info-items">
                        <img src={email} alt="" className='c-icon' /> anoop2u@outlook.com
                    </div>
                </div>
                <div className="c-info">
                    <div className="c-info-items">
                        <img src={address} alt="" className='c-icon' /> Kannur, Kerala
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story ?</b>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.
                </p>
                <form  ref={formRef}  onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name='user_name' />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name='user_subject' />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name='user_email' />
                    <textarea style={{backgroundColor: darkMode && "#333"}} name="message"  rows="5" placeholder='Message'></textarea>
                    <button>Submit</button>
                    {done && "  Thank you....."}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact