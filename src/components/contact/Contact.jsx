import React,{useState} from 'react'
import "./contact.scss"
function Contact() {

  const [message,setMessage]=useState(false);
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    console.log("form is submitted");
    setMessage(true);

  }
  return (
    <div className='contact' id='contact'>
        <div className="left">
          <img src="assets/shake.svg" alt="hand shake svg" />
        </div>
        <div className="right">
          <form  onSubmit={handleFormSubmit}>
            <input type="text"  placeholder='Subject'/>
            <textarea placeholder='Type your message' cols="30" rows="10"></textarea>
            <button type='submit'>Send</button>
            {message && <span>Thanks, I will reply ASAP.</span>}
          </form>

        </div>
    </div>
  )
}

export default Contact