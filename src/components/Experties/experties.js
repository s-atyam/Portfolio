import React from 'react';
import './experties.css';
import react_pic from './react.png';
import javascript_pic from './javascript.png';
import node_pic from './node.png';
import express_pic from './express.png';
import mongodb_pic from './mongodb.png';
import mysql_pic from './mysql.png';

const Experties = () => {
  return (
    <div id='exp' className='main-experties'>
      <div className='experties-menu'>
        <img src={react_pic} className='experties-menu-pic' alt=''/>
        <div className='experties-menu-content'>
          <h1>React JS</h1>
          <p>Over my journey, I've immersed myself in the world of React. This dynamic JavaScript library has empowered me to fashion user interfaces that are not only visually stunning but also highly efficient.</p>
        </div>
      </div>
      <div className='experties-menu'>
        <img src={javascript_pic} className='experties-menu-pic' alt=''/>
        <div className='experties-menu-content'>
          <h1>JavaScript</h1>
          <p>My journey in web development has been anchored by JavaScript. This versatile language has been my creative canvas, enabling me to breathe life into websites and applications.</p>
        </div>
      </div>
      <div className='experties-menu'>
        <img src={node_pic} className='experties-menu-pic' alt=''/>
        <div className='experties-menu-content'>
          <h1>Node JS</h1>
          <p>My coding journey took an exciting turn with Node.js. This runtime environment has been my gateway to server-side development, enabling me to craft scalable and efficient applications.</p>
        </div>
      </div>
      <div className='experties-menu'>
        <img src={express_pic} className='experties-menu-pic' alt=''/>
        <div className='experties-menu-content'>
          <h1>Express JS</h1>
          <p>Express.js has been a crucial tool in my web development arsenal. This minimalist and flexible Node.js framework has allowed me to streamline the creation of robust and efficient server-side applications.</p>
        </div>
      </div>
      <div className='experties-menu'>
        <img src={mongodb_pic} className='experties-menu-pic' alt=''/>
        <div className='experties-menu-content'>
          <h1>MongoDB</h1>
          <p>My journey in database management has led me to MongoDB, a NoSQL database that has redefined how I handle data. With MongoDB, I've embraced flexibility and scalability, crafting databases that effortlessly adapt to the evolving needs of modern applications.</p>
        </div>
      </div>
      <div className='experties-menu'>
        <img src={mysql_pic} className='experties-menu-pic' alt=''/>
        <div className='experties-menu-content'>
          <h1>MySQL</h1>
          <p>While MongoDB has been my go-to for flexible NoSQL databases, I've also explored the structured world of MySQL. This relational database system has provided me with a rock-solid foundation for managing structured data, offering a structured alternative to MongoDB.</p>
        </div>
      </div>
    </div>
  )
}

export default Experties;