import React from 'react'
import './problemsolving.css'
import coding_image from './image.gif'

const Problemsolving = () => {
  const onClick = () =>{
    window.open('https://leetcode.com/satyam_lc1/', '_blank')
  }
  return (
    <div className='main-ps'>
        <div className='ps-content'>
            <p>Hello, I'm <span>Satyam Bharti</span>, a passionate and dedicated web developer with a deep love for creating exceptional digital experiences. My journey into the world of <span>MERN</span> stack web development has been a thrilling adventure, marked by the exploration of React, Node.js, MongoDB, Express.js, and, of course, the power of JavaScript.</p>
            
            <p>I've honed my skills in crafting robust web solutions and translating innovative ideas into captivating, user-centric interfaces. Beyond just coding, I thrive on solving complex problems and embracing new challenges. My web development journey has been a blend of creativity, precision, and a relentless commitment to staying at the forefront of technology.</p>

            <p>What sets me apart is my holistic approach to development. I'm not only a tech enthusiast but also a problem solver, a collaborator, and a continuous learner. In addition to my web development expertise, I've embarked on a <span>Data Structures and Algorithms</span> journey, where I've honed my problem-solving skills with over <span>300 solutions</span> on LeetCode.</p>
            <button onClick={onClick} target='_blank' rel='noreferrer' className='ps-content-btn'>Leetcode Profile</button>
        </div>
        <img src={coding_image} className='ps-image' alt="loading..." />
    </div>
  )
}

export default Problemsolving