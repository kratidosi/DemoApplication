import React,{useState, useEffect} from "react";
import styled from "styled-components";

import axios from "axios";
import  Footer  from "../../Commons/Footer/Footer";
import Navbar from "../../Commons/Navbar/Navbar";





const Container = styled.div`
border:none; background:white; height:750px;
margin-left:10%;
margin-top:5%;
width:80%;
`;

const Paragraph = styled.p`
font-size:20px; color:#03225C;
`;
const Imaged = styled.img`
height:512px; 

`;

const CommonPage = (props) =>{
    let [responseData, setResponseData] = useState([]);
    useEffect(() => {
        fetchData();
       },[])
      
       const fetchData = () =>{
      
        const propsid =  props.id;
         axios.get("http://localhost:3000/data")
         .then(res =>{
           const data1 = res.data;
           const data = data1.filter(x =>x.id == propsid);  
           setResponseData(data);
         
         })
         .catch((error) =>{
           console.log(error);
         }) 
        }
      
        
      
return(
    <>
    <Navbar />
    <h1 style={{textAlign:"center",color:"darkred", fontFamily:"cursive",marginTop:"15px",
    textDecoration:"underline"
}}>{props.name}</h1>
    <Container className="row">
    <div class="col-xs-6">
    <Imaged src = {props.picname}/>
    </div>
 
    <div class="col-xs-6">  
   
			<h3>View Information!!</h3>
            {responseData.map((item,index) =>(
                <>
          
                <Paragraph>{item.staticContent}</Paragraph>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed hendrerit adipiscing blandit. Aliquam placerat, velit a fermentum fermentum, mi felis vehicula justo, a dapibus quam augue non massa.</Paragraph>
        </>
        ))}
        <button type="button" class="btn btn-lg btn-danger" onClick={()=>{
          window.history.back();
        }}>Go Back</button>
			
		</div>
    </Container>
    <br/>
    <br/>
    <Footer/>
    </>
)
}


export default CommonPage;