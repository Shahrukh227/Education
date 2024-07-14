import React from 'react'
import "./Intro.css"
import { FaLongArrowAltRight } from "react-icons/fa";

function Intro() {
  return (
    <div className='intro container' name="home">
      <div className='content'>
      <h1>We Ensure better education for a better world</h1>
      <p>Our cutting-edge curriculam is designed to empower students with the knowledge , skills and experiece needed to excel in the dyamic field of education.</p>
      <button className='btn'>Explore more <FaLongArrowAltRight /></button>
      </div> 
    </div>
  )
}

export default Intro
