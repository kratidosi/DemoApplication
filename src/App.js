import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StaticPages from "./Components/StaticPages/StaticPages";
import Form from "./Components/StaticPages/StaticPages.edit";
import Navbar from './Commons/Navbar/Navbar';
import About from "./Components/AboutUsPages/index";
import Contact  from "./Components/ContactUsPages/index";
import Career from "./Components/CareerUsPages/index";
import { useEffect, useContext, useState } from 'react';
import UserContext from "./API/UserContext";
import axios from "axios";

const App = () => {
 
  return (
    <div>
     
     <Router>
       <Switch>
         <Route exact path="/" component={StaticPages}/>
         <Route exact path="/edit/:id" component={Form}/>
         <Route exact path="/view/:id" component={Form} />
         <Route exact path="/home" component={Navbar} />
         <Route exact path="/about/:id" component={About} />
         <Route exact path="/contact/:id" component={Contact} />
         <Route exact path="/career/:id" component={Career} />
       </Switch>
     </Router>

   
    </div>
  );
}

export default App;
