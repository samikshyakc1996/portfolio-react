import React from 'react'
import "./portfoliolist.scss"
function PortfolioList({id,title,active,setSelected}) {

  return (
    <div className='Portfolio'>
    <li className={active ? "portfolio active" : "portfolio" } onClick={()=>setSelected(id)}>{title}</li>
    </div>
  )
}

export default PortfolioList