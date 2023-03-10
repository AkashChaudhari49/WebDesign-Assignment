import React from 'react'
import "./intro.css";

const Intro = (props) => {
  console.log(props);
  return (
    <div className='intro-container'>
        <h2 className='intro-heading'>{props.name}</h2>
    </div>
  )
}

export default Intro;