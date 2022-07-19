import React from 'react'
import Enavbar from '../Enavbar'
import {useState} from "react"
import Axios from 'axios';
import Table from 'react-bootstrap/Table'
import "../navbar.css"
// import axios from 'axios';
function Allcustomers() {

  const [CustomerList, setCustomerList] = useState([]);
  const [searchpc,setsearchpc] = useState("");
  const [show, setshow] = useState(false);
  const [buttonval, setbuttonval] = useState("show users");
  const getCustomers = () => {
    Axios.get("http://localhost:3001/user").then((response) => {
      setCustomerList(response.data);
      setshow(!show)
      console.log(show);
      (!show)?(setbuttonval("hide")):(setbuttonval("show"));
      
      
    });
  };
  const deleteCustomers = (email) =>{
      Axios.delete(`http://localhost:3001/deletec/${email}`).then((response) => {
      setCustomerList(CustomerList.filter((val)=>{
          return val.customeremail != email;
      }))

      }).catch(egg =>{
        console.log(egg.response);
    });
          

      }
  
  console.log(CustomerList);
  return (
    <div  className='activetab'>
        <Enavbar/>
        <input type= "text" placeholder = "Search.."
        onChange = {(event)=>{
          setsearchpc(event.target.value)
        }}></input>
        
        
        <Table stripped bordered hover size="sm" className='activetable'>
        <thead>
    <tr id='tfont'>
      <th >First Name</th>
      <th >Last Name</th>
      <th >Email</th>
      <th >Phone</th>
      <th >date of birth</th>
      
 
    </tr>
  </thead>
  
        
        
  {CustomerList.filter((val1)=>{
          if (searchpc == "") {
            return val1;
            
          }
          else if (val1.customerfname.toLowerCase().includes(searchpc.toLowerCase())) {
            return val1;
            
          }

        }).map((val, key) => {
          return (
            
              (show)?(
            <tbody>
            
                             
    <tr id='tfont'>
      <td>{val.customerfname}</td>
      <td>{val.customerlname}</td>
      <td>{val.customeremail}</td>
      <td>{val.customerphone}</td>
      <td>{val.customerdob}</td>
      <td><button onClick={()=>{deleteCustomers(val.customeremail)}}>delete</button></td>
      <td><button >update</button></td>

 
    </tr>
    </tbody>
            ):(
              <div></div>
            )
            
                
              
              
          )
    
}

        )}
        </Table>
        <button onClick={getCustomers} id='activebutton'>{buttonval}</button>
        </div>
  )
}
        

export default Allcustomers