import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'
import {useCookies} from "react-cookie"
import { useEffect } from 'react'
// import {useNavigate} from "react"

import EHome from './epages/eHome';
// import App from '../App';
// import callsignup from './callsignup';
// import SignUp from './SignUp';
function Loginform() {
    
    Axios.defaults.withCredentials = true
    function ERR(Text){
        return((<div className="error"><h1>{Text}</h1> </div>))
    }
    // console.log("loginob",Loginn.Loginn);
    let navigate = useNavigate();
    const [details, setDetails] = useState({name :"",email :"", password:""});
     const [type, settype] = useState(2);
     const [cookies, setCookie] = useCookies(['user']);
    //  const [failure, setfailure] = useState(false);
    // const [sdetails, setDetails] = useState({Fname :"", Lname : "",email :"", password:""});
    const submitHandler = e => {
        e.preventDefault();
        Axios.post('http://localhost:3001/customers',{
             cemail : details.email,
             cpassword : details.password,
             ctype : type
        }).then((response)=> {
            console.log(response.data.message)
            if (response.data.length > 0)
            {
        if(type == 0)
             navigate("/eHome") 
        else if(type == 1)
             navigate("/UHome") 
              
            // if (response.data.length !== 0){
            //     // setCookie('email', details.email, { path: '/eHome' });
            //     // setCookie('password', details.password, { path: '/eHome' });
            //     // console.log(response.data.length)
            //     // setsuccess(true); 
                
            // }
            
            }
            else{
                window.alert(response.data.message)
            }
            
        })
        .catch(egg =>{
            console.log(egg.response.status);
        })
    }
    
    
    
    
  return (
    <div>
        <div className='registration'>
        <ul>
            <li id='two'><Link to={"/SignUp"}> SignUp</Link> </li>
        </ul>
        </div>
      
    <form id='form11' >
        <div className='form-inner'>
         
            { (Error.err != "") ? ERR(Error.err) : ""} 
           
           <div className='form-group'>

               <label htmlFor='name'>Name</label>
               <input type="text" name='name' id='name' onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
           </div>

            <div className='form-group'>

               <label htmlFor='email'>Email</label>
               <input type="email" name='email' id='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
           </div>
           <div className='form-group'>

               <label htmlFor='password'>Password</label>
               <input type="password" name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
           </div>
           <div className='radiob'>
              <label  htmlFor='employee'>employee
               <input type="radio" checked={type==0} id='type' onClick={() => settype(0)}/>
               </label>
               <label  htmlFor='customer'>customer
               <input type="radio" checked={type==1} id='type' onClick={() => settype(1)}/>
               </label>

           </div>
           
           <button onClick={submitHandler} type='submit' value="LOGIN">login</button><br/><br/>
           <Link to="/SignUp"> Don't have an account? SignUp?</Link>
        </div>
        
        
    </form>
    <br />
      
      
      </div>
    

  )
}

export default Loginform