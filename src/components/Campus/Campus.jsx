import React from 'react'
import "./Campus.css"
import gallery from "../../assets/gallery1.jpg"
import gallery2 from "../../assets/gallery2.jpg"
import gallery3 from "../../assets/gallery3.jpg"
import gallery4 from "../../assets/gallery4.jpg"
import { FaLongArrowAltRight } from "react-icons/fa";


function Campus({setplaystate}) {
  return (
    <>
    <div className='campus' name="Campus">
      <div className="gallery">
        <img src={gallery} alt="" className='galleryimg'/>
        </div>

        <div className="gallery">
        <img src={gallery2} alt="" className='galleryimg'/>
        </div>


        <div className="gallery">
        <img src={gallery3} alt="" className='galleryimg'/>
        </div>

        <div className="gallery">
        <img src={gallery4} alt="" className='galleryimg'/>
        </div>
    </div>

<div className='campusbtn'>
<button className='btn2'>Show me more <FaLongArrowAltRight/></button>
</div>
  
</>  

  )
}

export default Campus
