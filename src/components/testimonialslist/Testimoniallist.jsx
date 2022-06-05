import React from 'react'
import "./testimoniallist.scss"
function testimoniallist(props) {
  return (
    <div className={(props.active? "card featured" : "card")} onMouseEnter={()=>props.setSelected(props.id)} onMouseLeave={()=>props.setSelected(1)}>
        <div className="top">
            <img src="assets/right-arrow.png" alt="right arrow" />
            <div className="profile">
            <img src="assets/profile.jpg" alt="profile" className='user-img'/>
            </div>
            <a href={props.href} target="_blank" rel="noreferrer"> <img src={props.icon} alt="contact icon" />

            </a>
           
        </div>

        <div className="center">
            <p>{props.desc}</p>
        </div>
        <div className="bottom">
            <h1>Samikshya K C</h1>
            <h2>{props.title}</h2>
        </div>

    </div>

   
  )
}

export default testimoniallist