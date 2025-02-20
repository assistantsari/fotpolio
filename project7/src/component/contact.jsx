import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
function contact() {
  return (
    <>
    <div className="container contact" id="contact">
     <h1>CONTACT ME</h1>
     <div className="icon"
     data-aos="zoom-in-up"
    data-aos-duration="1000"
     >
    
    <a href='https://www.instigram.com' className="items">
   
    <FaInstagramSquare className='icons' />

    </a>
    <a href='https://.www.facebook.com'className="items">
    <FaFacebookSquare className='icons' />
    

    </a>
    <a href='https://www.linkdin.com' className="items">
    <CiLinkedin className='icons' />
    </a>

    
    <a href='https://www.github.com'className="items">
    <FaGithub className='icons' />
    </a>
    <a href='https://www.twitter.com'className="items">
    <FaTwitterSquare className='icons' />
    </a>
    <a href='https://www.gmail.com'className="items">
    <CgMail  className='icons'/>
    </a>


     </div>




    </div>
      
    </>
  )
}

export default contact
