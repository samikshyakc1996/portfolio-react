import React, { useEffect, useRef } from 'react'
import { init } from "ityped"
import "./intro.scss"
function Intro() {
  const textRef=useRef();

  useEffect(()=>{
    console.log(textRef);
    init(textRef.current, {
       showCursor: true,
       startDelay: 500,
       backDelay:  1500,
       typeSpeed:  100,
        strings: ["Engineer","Web Developer" ]
       });

    
  },[]);
  return (
    <div className='intro' id="intro">
      <div className="intro-left">
        <div className="imgContainer">
          <img src="assets/profile.jpg" alt="profile" />
        </div>
      </div>
      <div className="intro-right">
        <div className="right-wrapper">
          <h1>Hi there, I'm</h1>
          <h2>Samikshya K C</h2>
          <h3>Software <span ref={textRef}></span></h3>

        </div>
        <div className="icon">
          <a href="#portfolio"> 
          <img src="assets/down.png" alt="arrow-down" />
          </a>
        </div>
        

      </div>
    </div>
  )
}

export default Intro