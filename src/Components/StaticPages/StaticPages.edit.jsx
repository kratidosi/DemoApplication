import React, { useState , useEffect, useRef} from "react";
import axios from 'axios';


import "./StaticPages.edit.css";

const API_URL="http://localhost:3000/data/"; 


const Form = (props) => {
    const [data, setData] = useState({
    details: {
      id: "",
      staticname: "",
      staticcontent: "",
      picture:""
    
    },
  });
  const inputRef = useRef();
  
  useEffect(()=>{
  
   
    getDetails();
  },[]);
   

  const id = props.match.params.id;


  const getDetails = () =>{
    
     axios.get("http://localhost:3000/data/"+id)
     .then(res => {
       console.log(res.data);
       const editdata = res.data;
        setData({
          details:{
            id: editdata.id,
            staticname: editdata.staticName,
            staticcontent: editdata.staticContent,
             picture: editdata.picture

          }
        })
     })
  }
  const handleInput = (event) =>{
    
  
   const {name, value} = event.target;
  
    setData({
      
      details:{
        ...data.details,
         [name]:value
      }
    })
  }
  const saveChanges = (e) =>{
       e.preventDefault();
     
      const id = data.details.id;
      axios.put("http://localhost:3000/data/"+id,{
        staticName: data.details.staticname,
      staticContent: data.details.staticcontent,
      picture: data.details.picture
    
      })
      .then(res =>{
      
        setData({
          details:{
            staticname:"",
            staticcontent:"",
            picture:""
          }
        });
        window.location.href="/";
         
      })
      .catch(error =>{
        console.log(error);
      })
  }
return (
    <>
    {window.location.pathname === `/edit/${id}`
    ?
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={saveChanges}
              style={{ width: "700px", marginLeft: "65%", marginTop:"40%" }}>
              <div 
                style={{
                  color: "rgb(46, 125, 50)",
                  background: "rgb(200, 230, 201)",
                  border: "1px solid black"
                }}
                id="contact-form"
                className="form-container"
                data-form-container
              >
                <div className="row">
                  <div className="form-title">
                    <span
                      style={{ marginLeft: "240px", fontFamily: "cursive" }}
                    >
                      <b>Edit Details</b>
                    </span>
                    <span
                      className="close"
                      style={{ marginLeft: "210px", marginTop: "3px" }}
                    >
                      x
                    </span>
                  </div>
                </div>
                <div className="input-container">
                  <div className="row">
                    <span
                      className="req-input"
                      style={{ background: "lightgreen" }}
                    >
                      <span
                        className="input-status"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Static Name."
                      >
                        {" "}
                      </span>
                      <input
                        type="text"
                        data-min-length="8"
                        placeholder="Enter Static Name!!"
                         ref={inputRef}
                        name="staticname"
                        value= {data.details.staticname}
                        onChange={handleInput}
                        required
                      />
                    </span>
                  </div>
                  <br />
                
               
                      <fieldset style={{ width: "570px",
                      background:"white",
                      marginLeft:"20px",
    height: "50px",
    border: "1px solid #ccc",
    padding: "10px"}}  placeholder="Choose style!!">
   <input type="button" class="boldText" value="Bold" />
<input type="button" class="italicText" value="Italic" />
<input type="button" class="underlineText" value="Underline" />
  </fieldset>
                
                  <br />
                  <div className="row">
                    <span
                      className="req-input"
                      style={{ background: "lightgreen" }}
                    >
                      <span
                        className="input-status"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Static Content"
                      >
                        {" "}
                      </span>
                      <input
                        type="text"
                        placeholder=" Enter Static Content!!"
                        ref={inputRef}
                        name="staticcontent"
                        value= {data.details.staticcontent}
                        onChange={handleInput}
                        required
                      />
                    </span>
                  </div>
                 <br/>
                 <div className="row">
                    <span
                      className="req-input"
                      style={{ background: "lightgreen" }}
                    >
                      <span
                        className="input-status"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Picture"
                      >
                        {" "}
                      </span>
                      <input type="file" id="picture" 
                      name="picture" placeholder="Enter Picture.." 
                      onChange={handleInput} value={data.details.picture}/>
                    </span>
                  </div>
                 <br/>
              
                  <div className="row submit-row">
                    <button
                      type="submit"
                      className="btn btn-block submit-form"
                      style={{ fontSize: "25px", width: "180px", marginLeft:"210px" }}
                    >
                     Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> : 
      <div class="card" style={{marginTop:"10%",width:"50%", marginLeft:"25%"}}>
      <h5 class="card-header">View Details</h5>
      <div class="card-body">
        <h5 class="card-title">{data.details.staticname}</h5>
        <p class="card-text">{data.details.staticcontent}</p>
        <img src={data.details.picture} style={{width:"200px"}} />
        <a href="#" class="btn btn-primary" onClick={()=>{
          window.history.back();
        }}>Go Back</a>
      </div>
    </div>
      }
    
    </>
  );
};

export default Form;