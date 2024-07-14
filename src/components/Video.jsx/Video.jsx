import React, { useRef } from 'react'
import "./Video.css"
import video1 from "../../assets/video1.mp4"

function Video({playstate,setplaystate}) {
  const player = useRef(null)

  const closePlayer = (e)=>{
    if(e.target == player.current){
      setplaystate(false)
    }
  }
  return (
    <div className={`videoplay ${playstate ? "" : "hide"}`} ref={player} onClick={closePlayer}>
      <video src={video1} autoPlay muted controls></video>
    </div>
  )
}

export default Video
