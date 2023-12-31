import React from 'react'
import './projects.css'
import react_dp from '../images/react.png'
import express_dp from '../images/express.png'
import mysql_dp from '../images/mysql.png'
import javascript_dp from '../images/javascript.png'
import github_dp from '../images/github.png'

const Projects = () => {
  return (
    <div id='pro' className='main-project'>
        <div className='project-menu'>
            <h1>Task Tracker</h1>
            <div className='project-menu-icon'>
                <img src={react_dp} className='project-menu-icon-pic' alt=''/>
                <img src={express_dp} className='project-menu-icon-pic' alt=''/>
                <img src={mysql_dp} className='project-menu-icon-pic' alt=''/>
                <img src={javascript_dp} className='project-menu-icon-pic' alt=''/>
            </div>
            <p>Web application that manages your tasks efficiently. React for frontend and express for backend.
            <br/>Features : Add , Delete, Dependency graph, SMS alert for Action plan</p>
            <a href='https://github.com/s-atyam/task-tracker' target='_blank' rel='noreferrer'>
            <img src={github_dp} className='project-menu-icon-pic' alt=''/>
            </a>
        </div>
        <div className='project-menu'>
            <h1>Weather Application</h1>
            <div className='project-menu-icon'>
                <img src={react_dp} className='project-menu-icon-pic' alt=''/>
                <img src={javascript_dp} className='project-menu-icon-pic' alt=''/>
            </div>
            <p>Single page web application built with React which shows weather data (daily and hourly) of different cities across the globe.</p>
            <a href='https://github.com/s-atyam/weather-app' target='_blank' rel='noreferrer'>
            <img src={github_dp} className='project-menu-icon-pic' alt=''/>
            </a>
        </div>
        <div className='project-menu'>
            <h1>Portfolio</h1>
            <div className='project-menu-icon'>
                <img src={react_dp} className='project-menu-icon-pic' alt=''/>
                <img src={javascript_dp} className='project-menu-icon-pic' alt=''/>
            </div>
            <p>Welcome to my portfolio, a curated collection of my creative work and technical projects. Here, you'll find a showcase of my passion for React, where I blend innovation with design aesthetics and problem-solving.</p>
            <a href='https://github.com/s-atyam/Portfolio' target='_blank' rel='noreferrer'>
            <img src={github_dp} className='project-menu-icon-pic' alt=''/>
            </a>
        </div>
    </div>
  )
}

export default Projects;