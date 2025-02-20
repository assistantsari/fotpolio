import React from "react";
import Navbar from "./component/navabar";
import Home from "./component/home";
import Skills from "./component/Skills"
import Project from "./component/project"
import Contact from "./component/contact"


 
const app= () =>
{

return(

  <>
  
  <Navbar />
  <div className="container">
    <Home/>
    <Skills/>
    <Project/>   
    <Contact/>                 
   
   
  </div>
  </>
)

}
export default app
