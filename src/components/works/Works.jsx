import React,{useState} from 'react'
import "./works.scss"
function Works() {

  const [currentslide,setCurrentslide]=useState(0);
  const data=[
    {
      id:0,
      iconSrc:"assets/globe.png",

      title:"Web Design", 
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio adipisci magnam dolorem dolores a asperiores incidunt odit fugiat nobis labore!",
      imageSrc:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
    },
    {
      id:1,
      iconSrc:"assets/mobile.png",

      title:"Mobile application", 
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio adipisci magnam dolorem dolores a asperiores incidunt odit fugiat nobis labore!",
    
      imageSrc:"assets/photostash.png"
    },
    {
      id:2,
      iconSrc:"assets/writing.png",
      title:"Design and Branding", 
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio adipisci magnam dolorem dolores a asperiores incidunt odit fugiat nobis labore!",
    
      imageSrc:"assets/e-commerce.png"
    }
  ];

 
  const handleSlide=(way)=>{

    way==="left"? setCurrentslide(currentslide>0 ?  currentslide-1 : data.length-1 ) :
    setCurrentslide(currentslide<(data.length-1)? currentslide+1: 0)
    
   
  };
  return (
    <div className='works' id='works'>
      <h1>Work</h1>
      <div className="slider" style={{ transform:`translateX(-${currentslide*100}vw)`}}>    
          {data.map((d)=>(
            <div className="container">

                      <div className="item">
                      <div className="left">
                        <div className="leftContainer">
                          <div className="imgContainer">
                          <img src={d.iconSrc} alt={d.title} />
                          </div>
                          <h2>{d.title}</h2>
                          <p>{d.description}</p>
                        </div>

                      </div>
                      <div className="right">
                        <div className="imgContainer">
                          <img src={d.imageSrc} alt={d.title} />
                        </div>
                        
                      </div>
                      </div>
                        </div>                 
                  ))}
         </div>
       
       
          <img src="assets/arrow.png" alt="left-arrow" className='arrow left' onClick={()=>handleSlide("left")}/>
       
          <img src="assets/arrow.png" alt="right-arrow" className='arrow right' onClick={()=>handleSlide("right")} />
        
      
    </div>
  )
}

export default Works