import React from 'react'
import "./topbar.scss"
import {Person , Mail} from "@mui/icons-material"
// import PersonIcon from '@mui/icons-material/Person';
function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar "+(menuOpen && "active") }>
      <div className="wrapper">
        <div className="topbar-left">
          <a href="#intro" className='logo'>Samikshya</a>
          {/* <PersonIcon /> */}
          <div className="icon-container">
            <Person className='icon'/>
            <span>+1-437-985-1062</span>
          </div>
          <div className="icon-container">
            <Mail className='icon'/>
            <span>samikshyakc1996@gmail.com</span>
          </div>
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