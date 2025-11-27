import React from 'react'
import './Tittle.css';
const Tittle = (props) => {
  return (
    <div className='tittle'>
        <p>{props.title}</p>
        <h2>{props.subTitle}</h2>
    </div>
  )
}

export default Tittle
