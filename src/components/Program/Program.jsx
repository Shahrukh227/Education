import React from 'react'
import "./Program.css"
import school from "../../assets/graduation.jpg"
import school1 from "../../assets/master1.jpg"
import school2 from "../../assets/post.webp"
import { GiSchoolBag } from "react-icons/gi";
import { LuSchool } from "react-icons/lu";
import { MdSchool } from "react-icons/md";

function Program() {
  return (
    <div className='programs' name='program'>
      <div className="program">
        <img src={school} alt="school" className='school'/>
        <div className="caption">
        <GiSchoolBag  className='icons'/>
        <p>School</p>
        </div>
      </div>

      <div className="program">
        <img src={school1} alt="school"  className='school'/>
        <div className="caption">
        <LuSchool  className='icons'/>
        <p>Graduation</p>
        </div>
      </div>

      <div className="program">
        <img src={school2} alt="school"  className='school'/>
        <div className="caption">
        <MdSchool className='icons'/>
        <p>Post Graduation</p>
        </div>
      </div>
    </div>
  )
}

export default Program
