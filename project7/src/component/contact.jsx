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
    <div className="container contact">
     <h1>CONTACT ME</h1>
     <div className="icon">
    
    <a href='https://www.google.com' className="items">
   
    <FaInstagramSquare className='icons' />

    </a>
    <a href='https://.www.google.com'className="items">
    <FaFacebookSquare className='icons' />
    

    </a>
    <a href='https://www.google.com' className="items">
    <CiLinkedin className='icons' />
    </a>

    
    <a href='https://www.google.com'className="items">
    <FaGithub className='icons' />
    </a>
    <a href='https://www.google.com'className="items">
    <FaTwitterSquare className='icons' />
    </a>
    <a href='https://www.google.com'className="items">
    <CgMail  className='icons'/>
    </a>


     </div>




    </div>
      
    </>
  )
}

export default contact
