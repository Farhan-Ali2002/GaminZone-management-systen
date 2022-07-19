import React from 'react'
import Unavbar from './Unavbar';
import {useState} from "react"
import Axios from 'axios';
import Table from 'react-bootstrap/Table'
import {useNavigate} from "react-router-dom"
import AddGames from './Addgames';

function Games() {

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
    <div>
        <Unavbar/>
        
        <input type= "text" placeholder = "Enter game name"
        onChange = {(event)=>{
          setsearchgame(event.target.value)
        }}
        
        ></input>
        <Table stripped bordered hover size="sm">
        <thead>
    <tr>
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
            
                             
    <tr>
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
        <button onClick={()=>{getGames()}}>{buttonval}</button>
      
  
  

<br/><br/>

</div>



  )
}
        

export default Games