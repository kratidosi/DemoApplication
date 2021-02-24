import React, { useEffect, useState } from "react";
import "./StaticPages.style.css";
import axios from 'axios';
import { Redirect } from "react-router-dom";

const StaticPages = () =>{

  let [responseData, setResponseData] = useState([]);
 useEffect(() => {
   fetchData();
  },[])
 
  const fetchData = () =>{
    axios.get("http://localhost:3000/data")
    .then(res =>{
      const data = res.data;
      setResponseData(data);
    
    })
    .catch((error) =>{
      console.log(error);
    }) 
  }
 
  const renderHeader = () => {
    let headerElement = ["id", "staticName", "staticContent","editDetail", "viewDetail"];

    return headerElement.map((key, index) => {
      return (
        <th key={index} style={{ width: "120px" }}>
          {key.toUpperCase()}
        </th>
      );
    });
  };
 

 return(
        <>
       
       <div style={{marginTop:"5%"}}>
        <h1 id="title">Static Table</h1>
        <br/>
        <table id="employee" style={{maxWidth: "60%"}}>
          <thead>
            <tr>{renderHeader()}</tr>
          </thead>
          <tbody>
          {responseData.map((item, index) => (
      <tr key={index}>
      <td style={{textAlign:"center"}}>{index+1}</td>
           <td>
             {item.staticName}
           </td>
           <td>
             {item.staticContent}
           </td>
           <td className="opration">
         <button onClick={()=>{
          
           window.location.href="/edit/"+item.id;
         }}>Edit</button>
       </td>
       <td className="opration">
         <button onClick={()=>{
         
           window.location.href="/view/"+item.id;
         }}>
          View
         </button>
       </td>
           </tr>
         ))}

          </tbody>
        </table>
      </div>
      
        </>
    )
}

export default StaticPages;