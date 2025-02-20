import React from 'react'
import umair from './pdf/umair.pdf'


function home() {
  return (
    <>
     <div className="container home">
     <div className="left">

     <h1>I am umair khan</h1>
     <a href={umair} download="umair.pdf"className="btn btn-outline-warning">Download Resume</a>

     </div>
     <div className="right">
    <div className="image">
     <img src='/public/umair.jpg' alt="" />
    </div>

     </div>
     </div>
    </>
  )
}

export default home
