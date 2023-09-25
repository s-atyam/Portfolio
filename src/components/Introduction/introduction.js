import React from 'react';
import './introduction.css'
import dp from './dp.jpg'

const Introduction = () => {
  return (
    <div className='main-introduction'>
        <div className='introduction-dp'><img src={dp} className='introduction-dp-pic' alt=''/></div>
        <div className='introduction-content'>
            <span className='i-c-hello'>Hello, I am</span>
            <span className='i-c-text'>Satyam Bharti</span>
            <span className='i-c-work'>Software Developer</span>
            <p className='i-c-para'>He lifted the bottle to his lips and took a sip of the drink. He had tasted this before, but he couldn't quite remember the time and place it had happened. He desperately searched</p>
        </div>
    </div>
  )
}

export default Introduction;