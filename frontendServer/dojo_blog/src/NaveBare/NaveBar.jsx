import "./naveBare.css"
import InfoIcons from "@mui/icons-material/Info"
import AddIcons from "@mui/icons-material/Add"
import ListIcons from "@mui/icons-material/List"
import EmailIcons from "@mui/icons-material/Email"
import GithubIcons from "@mui/icons-material/GitHub"
import LinkedInIcons from "@mui/icons-material/LinkedIn"
import FacebookIcons from "@mui/icons-material/Facebook"
import {useHistory}  from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Abandoner } from "../Componente/AuthRedux/AuthRedux"
import axios from "axios"
import {useEffect,useState} from "react"
import { Sidebar, Menu, MenuItem, SubMenu} from "react-pro-sidebar"



const NaveBar = () => {
const[count,setCount]=useState(0)
const history = useHistory()
const dispatch = useDispatch()
const auth = useSelector(stat =>stat.auth)

const deconnexion = ()=>{
  if (auth._id) {
    dispatch(Abandoner(null))
    history.push("/")
  }
}

useEffect(()=>{
  const repons =  axios.get("http://localhost:5000/api/candidat/count")
  .then(()=>{
   setCount(repons.data);
  })
  
},[])




  return (
  <Sidebar className="sidebar">
      <div className="rigth">
                 <h1>L</h1>
                 <h3 style={{color:"tomato"}}>k</h3>
                 <h1>M</h1>
                 <h3 style={{color:"tomato"}}>c</h3>
        </div>
    <Menu className="menu">
    <h4 style={{display:"flex",alignItems:"center",justifyContent:"center", fontWeight:"bold"}}>Admine Page</h4>
    <SubMenu label="Dashboard" >
      <MenuItem  onClick={()=>history.push("/linechart")}>Line Chart</MenuItem>
      <MenuItem onClick={()=>history.push("/barechart")}>Bar Chart</MenuItem>
    </SubMenu>
    <SubMenu label="Offre " >
      <MenuItem  onClick={()=>history.push("/list")}>  Listes des offres</MenuItem>
      <MenuItem onClick={()=>history.push("/ajouter")}> Ajouter Offre</MenuItem>
    </SubMenu>
    <SubMenu label="Info" >
      <MenuItem onClick={()=>history.push("/infonce")}> Information d'inscription</MenuItem>
    </SubMenu>
    <SubMenu label="Projet" >
      <MenuItem  onClick={()=>history.push("/listeProjet")}> Listes des projet</MenuItem>
    </SubMenu>
    <SubMenu label="Teame" >
      <MenuItem  onClick={()=>history.push("/teame")}> Listes des teame</MenuItem>
      <MenuItem  onClick={()=>history.push("/teame")}> Ajouter teame</MenuItem>
    </SubMenu>
    <MenuItem onClick={()=>deconnexion()}> Déconnexion</MenuItem>
  </Menu>
  <span style={{color:"white",display:"flex",
         position:"relative",
         gap:"1rem",
         alignItems:"center",
         justifyContent:"center",
         marginTop:"50px"
          }}>
           <a href="https://mail.google.com"><EmailIcons style={{fontSize:"20px", color:"black"}}/></a>
           <a href="https://github.com/stephanorakotozandry"><GithubIcons  style={{fontSize:"20px",color:"black"}}/></a>
           <a href="https://www.linkedin.com/in/rovaniana-rakotozandry-5336612a1/"><LinkedInIcons style={{fontSize:"20px",color:"black"}}/></a>
           <a href="https://www.facebook.com/Niaina_Stephano"><FacebookIcons style={{fontSize:"20px",color:"black"}}/></a>
        </span>
    <div style={{display:"flex",
         position:"relative",
         alignItems:"center",
         justifyContent:"center",
         marginTop:"10px"}}>rovaniaina@gmail.com</div>
</Sidebar>
  )
}

export default NaveBar