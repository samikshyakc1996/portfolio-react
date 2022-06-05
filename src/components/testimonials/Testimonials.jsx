import React,{ useState} from 'react'
import Testimoniallist from '../testimonialslist/Testimoniallist';
import "./testimonials.scss"
function Testimonials() {

  const [selected,setSelected]=useState(1);
  const data=[
    {
      id:0,
      icon:"assets/linkedin.png",
      href:"https://www.linkedin.com/in/samikshya-kc-15a7401a6/",
      desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, temporibus.",
      title:"Software Engineer",
      featured: false

    },
    {
      id:1,
      icon:"assets/twitter.png",
      href:"https://www.linkedin.com/in/samikshya-kc-15a7401a6/",
      desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, tempore!",
      title:"Web Designer",
      featured: true
      
    },
    {
      id:2,
      icon:"assets/youtube.png",
      href:"https://www.linkedin.com/in/samikshya-kc-15a7401a6/",
      desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, vero.",
      title:"UI/UX Designer",
      featured: false
     
    }
  ];

  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
      {data.map((d)=>
         (
        <Testimoniallist 
        id={d.id}
        icon={d.icon}
        href={d.href}
        desc={d.desc}
        title={d.title}
        featured={d.featured}
        active={selected===d.id}
        setSelected={setSelected}
        />
        )
      )}
      </div>
    </div>
  )
}

export default Testimonials