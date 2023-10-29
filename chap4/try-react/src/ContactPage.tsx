import React from 'react'
import './contact.css'
import arola from './arola-logo.png';

function ContactScreen() {
  return (
    <div className="contact">
      <div >
        <div><h3>Hello, Uganda!</h3></div><br />
        <img src={arola} className="App-logo" alt="logo" />
      </div>
      <div className="form-input">
        <h3>Talk to us. We listen!</h3>
        <form action="">
          <label htmlFor="name"><h2>Name</h2></label><br/>
          <input type="text" title="name" placeholder='e.g. Samuel Katongole'/>
          <label htmlFor="email"><h2>Email</h2></label><br/>
          <input type="email" title="email" placeholder='e.g. samk@ait@mail.com'/>
        </form>
      </div>


    </div>
  

    
  )
}

export default ContactScreen;