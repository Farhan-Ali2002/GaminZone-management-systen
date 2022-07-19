// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Loginform from './components/Login';
// import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route,Navigate} from "react-router-dom";
import SignUp from './components/SignUp';
// import callsignup from './components/callsignup';
import CallLogin from './components/CallLogin';
import EHome from './components/epages/eHome';
import Chooselog from './components/Chooselog';
// import "./css/bootstrap.min.css";
import Activeuser from './components/epages/Activeuser';
import Pcs from './components/epages/Pcs';
import UHome from './components/Upages/Uhome';
import Uhome from './components/Upages/Uhome';
import UAbout from './components/Upages/UAbout';
import Allcustomers from './components/epages/allcustomers';
import Games from './components/Upages/ugames';
import EGames from './components/epages/Egames';
import Info from './components/epages/updateinfo';

function App() {
  

  return (
      <Router>
    <div className="App">{
      
      }
      
      </div>
      
      <Routes>
      <Route exact path ='/' element = {<Chooselog/>} />
      <Route path = "/SignUp" element = {<SignUp/>}/>
      <Route path = "/eHome" element = {<EHome/>}/>
      <Route path = "/Login" element = {<Loginform/>}/>
      <Route path = "/Activeuser" element = {<Activeuser/>}/>
      <Route path = "/Pcs" element = {<Pcs/>}/>
      <Route path = "/UHome" element = {<UHome/>}/>
      <Route path = "/Uabout" element = {<UAbout/>}/>
      <Route path = "/Allcustomers" element = {<Allcustomers/>}/>
      <Route path = "/Games" element = {<Games/>}/>
      <Route path = "/EGames" element = {<EGames/>}/>
      <Route path = "/Info" element = {<Info/>}/>
      
      </Routes>
      </Router>
      
    

      
  );
    }
    


export default App;
