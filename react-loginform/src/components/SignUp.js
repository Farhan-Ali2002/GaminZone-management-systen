import React,{useState} from 'react'
import { Link,Navigate, useNavigate } from 'react-router-dom';

import Axios from 'axios';
import Loginform from './Login';

function SignUp() {
    // function ERR(Text){
    //     return((<div className="error"><h1>{Text}</h1> </div>))
    // }
    // console.log("loginob",Loginn.Loginn);
    const [sdetails, setDetails] = useState({Fname :"", Lname : "",email :"", password:"",PhoneNo : "",Date_of_Birth : ""});
    const [success,setsuccess] = useState(false);
    const [failure,setfailure] = useState(false);
    const navigate = useNavigate()
    const addCustomer = e =>{
        e.preventDefault();

        Axios.post('http://localhost:3001/create',{
            // ValidityState

        cfname : sdetails.Fname,
        clname : sdetails.Lname,
        cemail : sdetails.email,
        cpassword : sdetails.password,
        cphone : sdetails.PhoneNo,
        cdob : sdetails.Date_of_Birth
    }).then((response)=> {
        console.log("done");
        console.log(response.status);
        console.log(response.data);
        if(response.status == 200){
            window.alert("signup succesfull")
        navigate('/Login')
        }
        
        
        
        
        
}).catch(error => {
    console.log(error.response);
    console.log(error.response.data.message)
    console.log(error.response.status);
    window.alert(error.response.data.message)
});



    };
    
    return (
        <div>
            <div className='registration'>
                <ul>
                    <li id='two'><Link to={"/Login"}> Login</Link> </li>
                </ul>
            </div>
    
        <form id ='form11'>
        <div className='form-inner1'>
           
           <div className='form-group1'>

               <label htmlFor='Firstname'>First Name</label>
               <input type="text" name='Firstname' id='Firstname' onChange={e => setDetails({...sdetails, Fname: e.target.value})} value={sdetails.Fname}/>
           </div>
           <div className='form-group1'>

               <label htmlFor='Lastname'>Last Name</label>
               <input type="text" name='Lastname' id='Lastname' onChange={e => setDetails({...sdetails, Lname: e.target.value})} value={sdetails.Lname}/>
           </div>

            <div className='form-group1'>

               <label htmlFor='email'>Email</label>
               <input type="email" name='email' id='email' onChange={e => setDetails({...sdetails, email: e.target.value})} value={sdetails.email}/>
           </div>
           <div className='form-group1'>

               <label htmlFor='password'>Password</label>
               <input type="password" name='password' id='password'  onChange={e => setDetails({...sdetails, password: e.target.value})} value={sdetails.password}/>
           </div>
           <div className='form-group1'>

               <label htmlFor='Phone'>Phone</label>
               <input type="tel" name='phone' id='phone'  onChange={e => setDetails({...sdetails, PhoneNo: e.target.value})} value={sdetails.PhoneNo}/>
           </div>
           <div className='form-group1'>

               <label htmlFor='DOB'> Date of Birth</label>
               <input type="date" name='DOB' id='DOB' onChange={e => setDetails({...sdetails, Date_of_Birth: e.target.value})} value={sdetails.Date_of_Birth}/>
           </div>
           <div className='centerr'>
           <button onClick={addCustomer} type='submit' value="signup">signup</button> 
</div>
       
        </div>
    </form>
    </div>
    );
}

 
export default SignUp;
