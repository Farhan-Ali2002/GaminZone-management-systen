import React from 'react'
import Enavbar from '../Enavbar';
import {useState} from "react"
import Axios from 'axios';
import Table from 'react-bootstrap/Table'
import {useNavigate} from "react-router-dom"
import AddGames from '../Upages/Addgames';
import "../navbar.css"
function EGames() {

  const [gameList, setgameList] = useState([]);
  const [show, setshow] = useState(false);
  const [buttonval, setbuttonval] = useState("show users");
  const [searchgame,setsearchgame] = useState("");
  const [ShowAddgame,setShowAddgame] = useState(false);
  
  const navigate = useNavigate()
  const getGames = () => {
    Axios.get("http://localhost:3001/addgame").then((response) => {
      setgameList(response.data);
      setshow(!show)
      console.log(show);
      (!show)?(setbuttonval("hide")):(setbuttonval("show"));
      
      
    });
  };
  // const showform = () =>{


  // }
  
  
  console.log("gamelist",gameList);
  return (
    <div className='activetab'>
        <Enavbar/>
        
        <input type= "text" placeholder = "Enter game name"
        onChange = {(event)=>{
          setsearchgame(event.target.value)
        }}
        
        ></input>
        <Table stripped bordered hover size="sm" className='activetable'>
        <thead>
    <tr id='tfont'>
    <th >game id</th>
      <th >game name</th>
      <th >game company</th>
      
      
 
    </tr>
  </thead>
  
        {gameList.filter((val1)=>{
          if (searchgame == "") {
            return val1;
            
          }
          else if (val1.gamename.toLowerCase().includes(searchgame.toLowerCase())) {
            return val1;
            
          }



        }).map((val, key) => {
          return (
            
              (show)?(
            <tbody>
            
                             
    <tr id='tfont'>
      <td>{val.gameid}</td>
      <td>{val.gamename}</td>
      <td>{val.gamecompany}</td>
      
 
    </tr>
    </tbody>
            ):(
              <div></div>
            )
              
          )
    
}

        )}
        </Table>
        <button onClick={()=>{getGames()}} id='activebutton'>{buttonval}</button>
      
  
  

<br/><br/>
<button onClick={()=>{setShowAddgame(!ShowAddgame)}} id='activebutton'>add game</button>
{
(ShowAddgame)?(
  <AddGames/>
  ):(
    <div/>
  )}

</div>



  )
}
        

export default EGames