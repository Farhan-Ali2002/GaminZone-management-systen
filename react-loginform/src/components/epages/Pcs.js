import React from 'react'
import Enavbar from '../Enavbar'
import {useState} from "react"
import Axios from 'axios';
import Table from 'react-bootstrap/Table'
import {useNavigate} from "react-router-dom"
import Addpcs from './Addpcs';
import "../navbar.css"

function Pcs() {

  const [pcList, setPcList] = useState([]);
  const [show, setshow] = useState(false);
  const [buttonval, setbuttonval] = useState("show users");
  const [searchpc,setsearchpc] = useState("");
  const [showAddPc,setShowAddPc] = useState(false);
  
  const navigate = useNavigate()
  const getPcs = () => {
    Axios.get("http://localhost:3001/addpc").then((response) => {
      setPcList(response.data);
      setshow(!show)
      console.log(show);
      (!show)?(setbuttonval("hide")):(setbuttonval("show"));
      
      
    });
  };
  // const showform = () =>{


  // }
  
  
  console.log(pcList);
  return (
    <div className='pctab'>
        <Enavbar/>
        
        <input type= "text" placeholder = "Search.."
        onChange = {(event)=>{
          setsearchpc(event.target.value)
        }}
        className='search'
        
        ></input>
        <Table stripped bordered hover size="sm" className='activetable'>
        <thead>
    <tr id='tfont'>
      <th >PC No</th>
      <th >PC model</th>
      <th >PC purchased date</th>
      
 
    </tr>
  </thead>
  
        {pcList.filter((val)=>{
          if (searchpc == "") {
            return val;
            
          }
          else if (val.Pcmodel.toLowerCase().includes(searchpc.toLowerCase())) {
            return val;
            
          }



        }).map((val, key) => {
          return (
            
              (show)?(
            <tbody>
            
                             
    <tr id='tfont'>
      <td>{val.Pcno}</td>
      <td>{val.Pcmodel}</td>
      <td>{val.pcpurchaseddate}</td>
      
 
    </tr>
    </tbody>
            ):(
              <div></div>
            )
              
          )
    
}

        )}
        </Table>
        <button onClick={()=>{getPcs()}} id='pcbutton'>{buttonval}</button>
      
  
  

<br/><br/>
<button onClick={()=>{setShowAddPc(!showAddPc)}} id='pcbutton'>add pc</button>
{
(showAddPc)?(
  <Addpcs/>
  ):(
    
    <div/>
  )}
</div>



  )
}
        

export default Pcs