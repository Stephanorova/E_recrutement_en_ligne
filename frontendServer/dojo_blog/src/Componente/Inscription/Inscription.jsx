import { Button } from "@mui/material"
import {useHistory} from "react-router-dom"
import "./inscription.css"
import ReplyOutlinedIccons from "@mui/icons-material/ReplyOutlined"
import { useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import { registerAuth } from "../AuthRedux/AuthRedux"

const Inscription = () => {

  const[register,setRgister] = useState({
    Nom:"",
    Prenom:"",
    Email:"",
    Password:""
  })
  const history = useHistory()
  const dispatch = useDispatch()

  const auth = useSelector( stat => stat.auth)
  console.log(auth);

  const handleAjouter = (e)=>{
    e.preventDefault()
    dispatch(registerAuth(register))
    history.push("/")
  }

  return (
    <div className="inscription-server" >
     <form onSubmit={handleAjouter}>
        <input type="text" placeholder='votre nom' onChange={(e)=>setRgister({...register, Nom: e.target.value})}/>
        <input type="text" placeholder='votre prénom' onChange={(e)=>setRgister({...register, Prenom: e.target.value})}/>
        <input type="email" placeholder='votre email' onChange={(e)=>setRgister({...register, Email: e.target.value})}/>
        <input type="Password" placeholder='votre mot de passe' onChange={(e)=>setRgister({...register, Password: e.target.value})}/>
         <button style={{color:"gray",
        border:"1px solid blue",
        height:"40px", 
        cursor:"pointer", 
        fontWeight:"bold"}}
        >Inscrire</button>
         <Button style={{color:"gray",
        border:"1px solid blue", 
        cursor:"pointer", 
        fontWeight:"bold"}}
        onClick={()=>history.push("/")}
        ><ReplyOutlinedIccons/></Button>
        </form>
    </div>
  )
}

export default Inscription