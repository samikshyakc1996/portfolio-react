import React from 'react'
import "./topbar.scss"
function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar "+(menuOpen && "active") }>
      <div className="wrapper">
        <div className="topbar-left">
          <a href="#intro" className='logo'>Samikshya</a>
          {/* <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
          <a href="#portfolio">Portfolio</a> */}

        </div>
        <div className="topbar-right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}  >
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar