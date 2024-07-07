import { Button } from "@mui/material"
import "./login.css"
import {useHistory} from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { LoginAuth } from "../AuthRedux/AuthRedux"

export const Login = () => {
  const[register,setUser]= useState({
    Email: "",
    Password: ""
  })
  const dispatch = useDispatch()
  const history = useHistory()
  const auth = useSelector(stat=> stat.auth)
  console.log(auth);

  const handleLogin = (e)=>{
    e.preventDefault()
    dispatch(LoginAuth(register))
  }

 useEffect(()=>{
   if (auth._id) {
     history.push("/list")
   }
 },[auth._id,history,dispatch])

  return (
    <div className='Login-Admine'>
        <form onSubmit={handleLogin} >
        <input type="email" placeholder='votre email' onChange={(e)=>setUser({...register, Email: e.target.value})}/>
        <input type="Password" placeholder='votre mot de passe'  onChange={(e)=>setUser({...register, Password: e.target.value})}/>
        <button style={{color:"gray",
        border:"1px solid blue", 
        height:"40px",
        cursor:"pointer", 
        fontWeight:"bold"}}
        >Login</button>
         <Button style={{color:"gray",
        border:"1px solid blue", 
        cursor:"pointer", 
        fontWeight:"bold"}}
        onClick={()=>history.push("/inscription")}
        >Inscrire</Button>
        </form>
    </div>
  )
}
