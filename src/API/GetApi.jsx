import React,{Component, useEffect, useState} from "react";
import axios from "axios";
import UserContext from "../API/UserContext";



 
  
  function GetApi(WrappedComponent) {
    
    class WithFetch extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          data1: []
        };
      }
      
      componentDidMount(){
        axios.get("http://localhost:3000/data")
        .then(res=>{
          console.log(res.data);
          this.setState({
            data1: res.data
          })
        })
      }
      // fetch functionality to populate this.state.data
      
      render() {
        return (
          <WrappedComponent data={this.state.data} {...this.props} />
        )
      }
    }
    
    return WithFetch; 
  }
  
  
  
export default GetApi;