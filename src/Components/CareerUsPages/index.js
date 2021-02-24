import React from "react";

import CommonPage from "../CommonPage/index";
import pic1 from "../../assets/careers2.jpg"


const Career = (props) =>{
  const id = props.match.params.id;
  return(
    <>
    
    <CommonPage picname={pic1} id={id} name="Career Us!!"/>
    </>
  )
}

export default Career;