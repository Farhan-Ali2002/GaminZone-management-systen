import React from 'react'
import {useState} from "react"
import Axios from 'axios';
import {useNavigate} from "react-router-dom"

function AddGames() {
  const [gamedetails, setgameDetails] = useState({ gamename : "",gamecompany :""});
  
  const addGame = e =>{
    e.preventDefault();

    Axios.post('http://localhost:3001/addgame',{
        // ValidityState

   
     gamename: gamedetails.gamename,
    gamecompany : gamedetails.gamecompany,
    
}).then((response)=> {
    console.log("done");
    console.log(response.status);
    console.log(response.data);
    if(response.status == 200){
        window.alert("game added")
    
}}).catch(error => {
console.log(error.response);
console.log(error.response.data.message)
console.log(error.response.status);
window.alert(error.response.data.message)
});



};
  
  return (
    

<form >
<div className='form-pc1'>
    
   
   <div className='form-pc1'>

       <label htmlFor='gamename'>game name</label>
       <input type="text" name='gamename' id='gamename' onChange={e => setgameDetails({...gamedetails, gamename: e.target.value})} value={gamedetails.gamename}/>
   </div>
   
    <div className='form-pc1'>

       <label htmlFor='gamecompany'>game company</label>
       <input type="text" name='gamecompany' id='gamecompany' onChange={e => setgameDetails({...gamedetails, gamecompany: e.target.value})} value={gamedetails.gamecompany}/>
   </div>
   
      
   <div className='centerr'>
   <button onClick={addGame} type='submit' value="addgame">Add Game</button> 
</div>

</div>
</form>

  )
}

export default AddGames