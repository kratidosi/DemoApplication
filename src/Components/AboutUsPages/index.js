import React from "react";

import CommonPage from "../CommonPage/index";
import pic1 from "../../assets/About-us.jpg"


const About = (props) =>{
  const id = props.match.params.id;
  return(
    <>
    
    <CommonPage picname={pic1} id={id} name="About Us!!"/>
    </>
  )
}

export default About;