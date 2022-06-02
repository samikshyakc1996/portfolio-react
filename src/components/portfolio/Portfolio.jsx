import React, {  useEffect, useState } from 'react'
import "./portfolio.scss"
import PortfolioList from "../portfoliolist/PortfolioList"
import {featuredApps, moreApps} from "../../projects" 
function Portfolio() {

const [selected,setSelected]=useState("featured");
const [data , setData]=useState([]);
 const List=[
   {
     id:"featured",
     title:"Featured"
   },
   {
    id:"more",
    title:"More apps"
  }

 ];

  useEffect(()=>{
      switch(selected){
        case "featured":
          setData(featuredApps)          
          break;
        
        case "more":
          setData(moreApps)
         
          break;

        default:

          setData(featuredApps)
      }    
       },[selected]);

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      
      <ul>
        
        
        {List.map(item=>(
          <span key={item.id}>
          <PortfolioList 
          id={item.id}
          title={item.title}         
          active={selected===item.id}
          setSelected={setSelected}
          />
          </span>
        ))}
       
      </ul>
      <div className="container">
          {data.map((d)=>(
            <div className="item" key={d.id}>      
              <a href={d.href} target="_blank" rel="noreferrer"> <img src={d.imgSrc} alt={d.title} /></a>
               <h3 className="title">{d.title}</h3>
             </div>
          ))}
        
      </div>
      
      
      </div>
  )
}

export default Portfolio