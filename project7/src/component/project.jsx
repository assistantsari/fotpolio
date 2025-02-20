import React from 'react'
import projects from "../assets/projects.json";

function project() {
  return (
    <>
     <div className="container project">
      <h1>Project</h1>
      <div className="row d-flex justify-content-center text-align-center">

        {projects.map((go)=>(
          <>
          
          <div key={go.id} className={"my-3 col-md-4"}>
          
          
          <div className="card bg-dark text-white" style={{width:'18rem', border:'1px solid yellow', boxShadow:'5px 5px 10px 0px rgba(101,175,10,0.5)'}} >
            <div className="img d-flex justify-content-center text-align-center">
  <img src={`/src/assets/${go.imageSrc}`} className="card-img-top" alt={go.name}
  
  style={{
  width:"18rem",
  border:"1px solid yellow",
  borderRadius:"10px" ,
  height:"18rem"




  }}
  
  
  
  />
  </div>
  <div className="card-body text-center ">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href={go.demo} className="btn btn-primary mx-3" >Demo</a>
    <a href={go.source} className="btn btn-warning">Source</a>
  </div>
</div>


          </div>
        
        
        
        
        </>))}
      </div>
      
      </div> 
    </>
  )
}

export default project
