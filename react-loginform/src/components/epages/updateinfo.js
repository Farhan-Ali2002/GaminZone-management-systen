import React from 'react'
import Enavbar from '../Enavbar'
import {useState} from "react"
import Axios from 'axios';
import Table from 'react-bootstrap/Table'
import "../navbar.css"
function Empinfo() {

  const [Userinfo, setUserinfo] = useState([]);
 
 
  function  getuserinfo() {
    Axios.get("http://localhost:3001/Info").then((response) => {
      
      setUserinfo(response.data);
   
      
      
    });
  };
  // console.log(employeeList);
  getuserinfo()

  return (
    <div className='infotab'>
        <Enavbar/>
       
        
        <Table stripped bordered hover size="sm" className='activetable' >
        <thead>
    <tr id ="tfont">
      <th >First Name:</th> 
     
     
      <th>{Userinfo[0].empfname}</th>
        </tr>
    <tr id ="tfont"> 
     
      <th >Last Name:</th>
      <th>{Userinfo[0].emplname}</th>
       </tr>
       <tr id ="tfont"> 
      <th >Email:</th>
      <th>{Userinfo[0].empemail}</th>
      </tr>
      <tr id ="tfont"> 
      <th >DateOfBirth:</th>
      <th>{Userinfo[0].empdob}</th>
    </tr>
      
 
  
  </thead>
  
  
             
            {/* <tbody>
            
                             
    <tr id ="tfont">
      <td>{Userinfo[0].empfname}</td>
      <td>{Userinfo[0].emplname}</td>
      <td>{Userinfo[0].empemail}</td>
      <td>{Userinfo[0].emppassword}</td>
      <td>{Userinfo[0].empdob}</td>
 
    </tr>
    </tbody> */}
          
                
              
         
        </Table>
   
    
        </div>
        
        
  )
}
        

export default Empinfo