import React from 'react'
import Enavbar from '../Enavbar'
import {useState} from "react"
import Axios from 'axios';
import Table from 'react-bootstrap/Table'
import "../navbar.css"
function Activeusercustomers() {

  const [customerList, setcustomerList] = useState([]);
  const [show, setshow] = useState(false);
  const [buttonval, setbuttonval] = useState("show users");
  const [searchpc,setsearchpc] = useState("");
  const getactivecustomer = () => {
    Axios.get("http://localhost:3001/activeuser").then((response) => {
      setcustomerList(response.data);
      setshow(!show)
      console.log(show);
      (!show)?(setbuttonval("hide")):(setbuttonval("show"));
      
      
    });
  };
  // console.log(employeeList);
  return (
    <div className='activetab'>
        <Enavbar/>
        <input type= "text" placeholder = "Search.."
        onChange = {(event)=>{
          setsearchpc(event.target.value)
        }}
        className='search'
        
        ></input>
        
        <Table stripped bordered hover size="sm" className='activetable' >
        <thead>
    <tr id ="tfont">
      <th >First Name</th>
      <th >Last Name</th>
      <th >Email</th>
      <th >Phone</th>
      <th >log in time</th>
      
 
    </tr>
  </thead>
  
  {customerList.filter((val)=>{
          if (searchpc == "") {
            return val;
            
          }
          else if (val.cfname.toLowerCase().includes(searchpc.toLowerCase())) {
            return val;
            
          }



        }).map((val, key) => {
          return (
            
              (show)?(
            <tbody>
            
                             
    <tr id ="tfont">
      <td>{val.cfname}</td>
      <td>{val.clname}</td>
      <td>{val.cemail}</td>
      <td>{val.cphno}</td>
      <td>{val.ctime}</td>
 
    </tr>
    </tbody>
            ):(
              <div></div>
            )
            
                
              
              
          )
    
}

        )}
        </Table>
        <button onClick={getactivecustomer} id='activebutton'>{buttonval}</button>
        </div>
  )
}
        

export default Activeusercustomers