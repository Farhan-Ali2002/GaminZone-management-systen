// import React, {useState} from 'react';
// import Loginform from './Login'
// // import { Link } from 'react-router-dom';
// import EHome from './epages/eHome';
// function CallLogin() {
//     // const adminUser = {
//     //     email : "farhanali0006@gmail.com",
//     //     password : "admin123"
//     //   }
//       const [user, setUser] = useState({name : "", email : ""});
//       const [error, setError] = useState({err : ""});
      

//       // z
     
    
//       const Login = (details) => {
//         // adminUser = adminUser.map()
//         if(details.email === adminUser.email && details.password === adminUser.password){
//             console.log(details);
        
//             console.log("login successful");
//         setUser({name : details.name, email: details.email});
//         }
//         else{
//           setError({err : "details do not match"});
//           alert("details do not match");
//           console.log("error")
          
//         }
//       }
//       const Logout = () => {
//         console.log("logout");
//         setUser({name : "", email : ""})
//       }
//   return (
//       <div>
//     {(user.name !== "")?(
//         <div className='welcome'>
//           <EHome/>
          

//         </div>

//       ):
//       (
//         <div>
//       <Loginform Loginn={Login} error = {error}/>
      
//       </div>
//       )
// }
//       </div>
//   )
// }

// export default CallLogin