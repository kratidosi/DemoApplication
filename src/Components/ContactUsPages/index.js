import React,{useState, useEffect} from "react";
import styled from "styled-components";
import CommonPage from "../CommonPage/index";
import pic1 from "../../assets/contact_us.png"


const Contact = (props) =>{
  const id = props.match.params.id;
  return(
    <>
    
    <CommonPage picname={pic1} id={id} name="Contact Us!!"/>
    </>
  )
}

export default Contact;