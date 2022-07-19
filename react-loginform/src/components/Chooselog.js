import React from 'react'
import { Link } from 'react-router-dom'

function Chooselog() {
  return (
    
     <div className='registration2'>
        <ul>
      <li className='one'><Link to={"/Login"}>Login</Link></li>
      <li className='two'><Link to={"/SignUp"}> SignUp</Link> </li>
      
      </ul>
      </div>

   
  )
}

export default Chooselog