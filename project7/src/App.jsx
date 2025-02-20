import React,{useEffect} from "react";
import Navbar from "./component/navabar";
import Home from "./component/home";
import Skills from "./component/Skills"
import Project from "./component/project"
import Contact from "./component/contact"
import AOS from 'aos';
import 'aos/dist/aos.css';


 
const app= () =>
{
  useEffect(()=>
{
  AOS.init();
},[])
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
