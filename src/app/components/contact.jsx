import React from 'react';
import "./contact.css"
const Contact = () => {
    return (
        <div id='contactsection'>
          <img src='./ugcmr.jpg' id='backcpntact'/>
            <div id='contactcontainer'>
                <h2>Contact Me</h2>
                <div className='social'>
                    <img src='./mail2.png'/>
                    <span>ugcbyrabab@gmail.com</span>
                </div>
                <div className='social'>
                    <img src='./instagram2.png'/>
                    <span>UGCBYRABAB_</span>
                </div>

                <form >

                    <div className="group">
                        <img src='user(2).png' className='icon'/>
                        <input className="input" type="text" placeholder="FULL NAME" />
                    </div>
               
                    <div className="group">
                       <img src='./mail.png' className='icon'/>
                        <input className="input" type="text" placeholder="EMAIL" />
                    </div>
                    <div className="group">
                       <img src='./writing.png' className='icon'/>
                        <textarea className="input"  placeholder="Your Message" />
                    </div>
                    <div id="contactbtn">
                        ENVOYER

                    </div>
                </form>

            </div>
        </div>
    );
}

export default Contact;
