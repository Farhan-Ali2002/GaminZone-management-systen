import React from 'react'
import {useState} from "react"
import Axios from 'axios';
import {useNavigate} from "react-router-dom"
import "../navbar.css"
function Addpcs() {
  const [pcdetails, setpcDetails] = useState({ Pcmodel : "",pcpurchaseddate :""});
  
  const addPc = e =>{
    e.preventDefault();

    Axios.post('http://localhost:3001/addpc',{
        // ValidityState

   
    Pcmodel : pcdetails.Pcmodel,
    pcpurchaseddate : pcdetails.pcpurchaseddate,
    
}).then((response)=> {
    console.log("done");
    console.log(response.status);
    console.log(response.data);
    if(response.status == 200){
        window.alert("pc added")
    
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

       <label htmlFor='PC model'>Pc model</label>
       <input type="text" name='pcmodel' id='pcmodel' onChange={e => setpcDetails({...pcdetails, Pcmodel: e.target.value})} value={pcdetails.Pcmodel}/>
   </div>
   
    <div className='form-pc1'>

       <label htmlFor='pcpurchasedate'>Pcpurchasedate</label>
       <input type="DATE" name='pcpurchasedate' id='pcpurchasedate' onChange={e => setpcDetails({...pcdetails, pcpurchaseddate: e.target.value})} value={pcdetails.pcpurchaseddate}/>
   </div>
   
      
   <div className='centerr'>
   <button onClick={addPc} type='submit' value="addpc">Add PC</button> 
</div>

</div>
</form>

  )
}

export default Addpcs