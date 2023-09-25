import React from 'react';
import './linewithtext.css'

const Linewithtext = (props) => {
  return (
    <h1>
        <span>{props.text}</span>
    </h1>
  )
}

export default Linewithtext