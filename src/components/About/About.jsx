import React from 'react'
import about from "../../assets/about.avif"
import "./About.css"
import { FaPlayCircle } from "react-icons/fa";

function About({setplaystate}) {
  return (
    <div className="courseing" name="About">
        <div className="box">
        <img src={about} alt="About" className='aboutImg'/>
        <FaPlayCircle className='play' onClick={()=>{setplaystate(true)}}/>
        </div>
     
    <div className="Ucontent">
      <h3>About University</h3>
      <h2>Nututing Tomorrow's Leaders Today</h2>
      <p>Embark on trasformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculam is desiged to empower studebts with the knowledge , skills and expeiences needed to exce; in the dynamic field of education.</p>
      <br />
      <p>with a focus on innovation, hands-on learning and personalized mentorship our programs prepare aspiring educators to male a meanningful impact in classrooms schools and communities</p>
      <br />
      <p>Whether you aspire to become a teacher, administrator , counselor or educational leader our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
    </div>
      </div>
  )
}

export default About
