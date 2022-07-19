import React from 'react'
import Enavbar from '../Enavbar'
import {useEffect} from "react"
import axios from 'axios'
import Loginform from '../Login'
import {Route, Navigate} from "react-router-dom"
import "../navbar.css"
//  import CallLogin from '../CallLogin'
//  import {useCookies} from "react-cookie"
// import Loginform from '../Login'
// import { Link } from 'react-router-dom'

function EHome() {
  // const [cookies, setCookie, removeCookie] = useCookies(['email']);
  
    //  const myCookie = cookies.get('email')
    useEffect(()=>{

      axios.get('http://localhost:3001/customers').then((response)=>{
      
      
      })

  },[])
  return (
      <div className='hometab'>
    <div>
    <Enavbar/>
         
    </div>
    </div> 
  )
  
}

export default EHome