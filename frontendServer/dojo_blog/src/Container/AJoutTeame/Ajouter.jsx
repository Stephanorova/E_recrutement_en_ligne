import { useEffect, useState } from 'react'
import'./index.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const Ajouter = () => {
   const [ajouter,setAjouter]= useState({
    Matricule: "",
    Photo: "",
    Nom: "",
    Prenom: "",
    Activite: ""
   })

   const history = useHistory()

  const handleAjout = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/api/teame/", ajouter)
        .then(res =>console.console.log(res.data))
        .catch(erreur => console.log(erreur))
        history.push("/teame")
  }
  
  return (
    <div className='ajoutOffre'>
    <form  onSubmit={handleAjout}>
       <input type="number" placeholder='Matricule' onChange={(e)=>setAjouter({...ajouter, Matricule: e.target.value})}/>
       <input type="text" placeholder='Photo'onChange={(e)=>setAjouter({...ajouter, Photo: e.target.value})}/>
       <input type="text" placeholder='Nom' onChange={(e)=>setAjouter({...ajouter, Nom: e.target.value})}/>
       <input type="text" placeholder='Prenom'onChange={(e)=>setAjouter({...ajouter, Prenom: e.target.value})}/>
       <input type="text" placeholder='Activite'onChange={(e)=>setAjouter({...ajouter, Activite: e.target.value})}/>
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

export default Ajouter