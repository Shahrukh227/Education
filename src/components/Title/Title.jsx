import React from 'react'
import "./Title.css"

function Title({title,subtitle}) {
  return (
    <div className='title'>
      <h3>{title}</h3>
      <h1>{subtitle}</h1>
    </div>
  )
}

export default Title
