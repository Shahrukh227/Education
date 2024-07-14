import React, { useRef } from 'react'
import "./Testimonials.css"
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import image1 from "../../assets/student1.avif"
import image2 from "../../assets/student2.jpg"
import image3 from "../../assets/student3.webp"
import image4 from "../../assets/student4.jpg"

function Testimonials() {

const slider = useRef()
let tx = 0;

  const forwardMove = ()=>{
if(tx > -50){
  tx -= 25;
}

slider.current.style.transform = `translateX(${tx}%)`
  }

  
  const backMove = ()=>{
    if(tx < 0){
      tx += 25;
    }
    
    slider.current.style.transform = `translateX(${tx}%)`
      }


  return (
    <div className='testimoials' name="testimony">
      <FaArrowAltCircleRight className='next-btn' onClick={forwardMove}/>

      <FaArrowAltCircleLeft className='back-btn' onClick={backMove}/>

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className="user-info">
                <img src={image1} alt="" />
                <div>
                  <h3>
                    Rose
                  </h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel magni ipsum delectus. Cum maiores iusto suscipit praesentium veritatis omnis quo.</p>
            </div>
          </li>

          <li>
            <div className='slide'>
              <div className="user-info">
                <img src={image2} alt="" />
                <div>
                  <h3>
                    Rose
                  </h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel magni ipsum delectus. Cum maiores iusto suscipit praesentium veritatis omnis quo.</p>
            </div>
          </li>

          <li>
            <div className='slide'>
              <div className="user-info">
                <img src={image3} alt="" />
                <div>
                  <h3>
                    Rose
                  </h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel magni ipsum delectus. Cum maiores iusto suscipit praesentium veritatis omnis quo.</p>
            </div>
          </li>

          <li>
            <div className='slide'>
              <div className="user-info">
                <img src={image4} alt="" />
                <div>
                  <h3>
                    Rose
                  </h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel magni ipsum delectus. Cum maiores iusto suscipit praesentium veritatis omnis quo.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
