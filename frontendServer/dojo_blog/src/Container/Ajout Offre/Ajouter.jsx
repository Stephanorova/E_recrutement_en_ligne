
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import'./ajout.css'
import { useDispatch, useSelector } from "react-redux"
import { registeroffre } from './AjoutRedux/AjouterOffreSlice'


export const Ajouter = () => {
 const[ajout,setAjout] = useState({
  name: "",
  Genre: "",
  Mission: "",
  Profil: "",
 })

const dispatch = useDispatch()
const history = useHistory()
const offre = useSelector(state => state.offre)
console.log(offre);

const handleAjoutAll = (e)=>{
   e.preventDefault()
   dispatch(registeroffre(ajout))
   history.push("/list")
}

  return (
    <div className='ajoutOffre'>
     <form onSubmit={handleAjoutAll}>
        <input type="text" placeholder='titre offre' onChange={(e)=>setAjout({...ajout, name: e.target.value})}/>
        <input type="text" placeholder='genre' onChange={(e)=>setAjout({...ajout, Genre: e.target.value})}/>
        <input type="text" placeholder='mission' onChange={(e)=>setAjout({...ajout, Mission: e.target.value})}/>
        <textarea type="text" placeholder='profil' onChange={(e)=>setAjout({...ajout, Profil: e.target.value})}/>
         <button style={{color:"gray",
        border:"1px solid blue", 
        width:"200px",
        height:"50px",
        position:"relative", 
        cursor:"pointer", 
        left:"10rem", 
        fontWeight:"bold"}}
        >Ajouter</button>
    </form>
    </div>
  )
}
