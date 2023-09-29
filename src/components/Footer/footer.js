import React from 'react'
import './footer.css'
import linkedin_pic from '../images/linkedin.png';
import github_pic from '../images/github.png';

const Footer = () => {
  return (
    <div className='main-footer'>
        <img src={github_pic} className='footer-image' alt="loading..." onClick={()=>{window.open('https://github.com/s-atyam','_blank')}} />
        <img src={linkedin_pic} className='footer-image' alt="loading..." onClick={()=>{window.open('https://www.linkedin.com/in/satyam-bharti-aa9078219/','_blank')}} />
        <h3>Made in React</h3>
    </div>
  )
}

export default Footer