import { useHistory } from 'react-router-dom'
import'./naveBotom.css'
import { useState } from 'react'
import MenuIcons from "@mui/icons-material/Menu"



function NavBotom() {
   const history = useHistory()
   const [mobil,setMobil] =useState(false)

   
   
  return (
    <div className='navebotom'>
        <div className="left">
          <span style={{cursor:"pointer"}} 
          onClick={()=>history.push("/")}>
            <i style={{fontWeight:"bold",color:"tomato",fontSize:"20px"}}>R</i>-ecrutement</span>
        </div>
        <div className="rigth">
          <div className={mobil ? "responsive" : "nonresponsive"}>
          <ul  onClick={()=>setMobil(false)}>
          <li onClick={()=>history.push("/")}>
              Offres
            </li>
            <li onClick={()=>history.push("/service")}>
              Service
            </li>
            <li onClick={()=>history.push("/apropos")}>
              Teame
            </li>
            <li onClick={()=>history.push("/contact")}>
              Contact
            </li>
          </ul>
          </div>
          <span className='button' onClick={()=>setMobil(!mobil)}>
            {mobil ? "" : <i className='open'><MenuIcons/></i>}
          </span>
        </div>
    </div>
  )
}

export default NavBotom