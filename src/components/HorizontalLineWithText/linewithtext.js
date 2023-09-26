import React from 'react';
import './linewithtext.css'

const Linewithtext = (props) => {
  return (
    <h1 className='linewithtext'>
        <span>{props.text}</span>
    </h1>
  )
}

export default Linewithtext