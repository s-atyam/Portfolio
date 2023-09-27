import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='main-contact'>
      <form className='contact-form'>
        <input type='text' className='contact-form-name' placeholder='Enter you name...' ></input>
        <input type='email' className='contact-form-email' placeholder='Enter you email...'></input>
        <textarea type='text' className='contact-form-text' placeholder='Enter you message...' rows={7} ></textarea>
        <button className='contact-form-btn'>SUBMIT</button>
      </form>
    </div>
  )
}

export default Contact;