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
            <p className='i-c-para'>I'm Satyam, a MERN stack enthusiast and web developer with a zeal for creating seamless digital experiences. With 1 year of experience in React, Node.js, MongoDB, and Express.js, I've honed my skills in building efficient and engaging web applications. My journey also extends to Data Structures and Algorithms, where I've tackled over 300 challenges on LeetCode, enhancing my problem-solving expertise.</p>
        </div>
    </div>
  )
}

export default Introduction;