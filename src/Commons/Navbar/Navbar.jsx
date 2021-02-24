import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import UserContext from "../../API/UserContext";
import GetApi from "../../API/GetApi";

const Navbar = () => {
 
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
       
       const TodosWithFetch = GetApi(
        <Navbar />,
        "http://localhost:3000/data"
      );
       
      console.log(TodosWithFetch);
     
    
  return (
    
    <>
  
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="#">
          <img
            src="https://ca-times.brightspotcdn.com/dims4/default/43b9308/2147483647/strip/true/crop/10800x8100+0+0/resize/840x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ffe%2Ff1%2Fe50f3c604fd8ba870da1edb18f6c%2Fbird1.jpg"
            alt="logo"
            style={{ width: "60px" }}
          />
        </a>

        <ul className="navbar-nav" style={{ fontSize: "20px" }}>
            {responseData.map((name,index) =>(
                <li key={index} className="nav-item">
                <a className="nav-link" href={name.id===1?"/about/"+name.id:name.id===2?"/contact/"+name.id:"/career/"+name.id}>
                 {name.staticName}
                </a>
              </li>
            ))
        
}
        </ul>
        <form className="form-inline" style={{ marginLeft: "50%" }}>
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </form>
      </nav>
    </>
  );
};

export default Navbar;