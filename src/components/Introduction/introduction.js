import React from 'react';
import './introduction.css'
import dp from '../images/dp.jpg'

const Introduction = () => {
  return (
    <div id='intro' className='main-introduction'>
        <div className='introduction-dp'><img src={dp} className='introduction-dp-pic' alt=''/></div>
        <div className='introduction-content'>
            <span className='i-c-hello'>Hello, I am</span>
            <span className='i-c-text'>Satyam Bharti</span>
            <span className='i-c-work'>MERN Developer</span>
            <p className='i-c-para'>I've been working with the MERN stack for about a year now, diving into React, Node.js, MongoDB, and Express.js. During this time, I've focused on developing web applications that are not just functional but also really grab the user's attention. I've also delved into the world of Data Structures and Algorithms, taking on more than 300 challenges on LeetCode. It's been a great way for me to sharpen my problem-solving skills.</p>
        </div>
    </div>
  )
}

export default Introduction;