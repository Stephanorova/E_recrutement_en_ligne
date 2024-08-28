import { useEffect, useState } from 'react'
import'./index.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const Update = () => {

   const [ajouter,setAjouter]= useState({
    Matricule: "",
    Photo: "",
    Nom: "",
    Prenom: "",
    Activite: ""
   })

   const history = useHistory()
   const { _id } = useParams()
    
   useEffect(()=>{
         axios.get("http://localhost:5000/api/teame/"+_id)
         .then(res=>{
            setAjouter({...ajouter,
               Matricule: res.data.Matricule,
               Photo: res.data.Photo,
               Nom: res.data.Nom,
               Prenom: res.data.Prenom,
               Activite: res.data.Activite,
              })
         })
     }, [])

   const handleUpdate = (e)=>{
       e.preventDefault()
       axios.put("http://localhost:5000/api/teame/"+_id, ajouter)
         .then(res =>console.console.log(res.data))
         .catch(erreur => console.log(erreur))
       history.push("/teame")
   }
  
  return (
    <div className='ajoutOffre'>
    <form onSubmit={handleUpdate}>
       <input type="number" placeholder='Matricule' value={ajouter.Matricule} onChange={(e)=>setAjouter({...ajouter, Matricule: e.target.value})}/>
       <input type="text" placeholder='Photo' value={ajouter.Photo} onChange={(e)=>setAjouter({...ajouter, Photo: e.target.value})}/>
       <input type="text" placeholder='Nom' value={ajouter.Nom} onChange={(e)=>setAjouter({...ajouter, Nom: e.target.value})}/>
       <input type="text" placeholder='Prenom' value={ajouter.Prenom}  onChange={(e)=>setAjouter({...ajouter, Prenom: e.target.value})}/>
       <input type="text" placeholder='Activite'  value={ajouter.Activite}   onChange={(e)=>setAjouter({...ajouter, Activite: e.target.value})}/>
       <button style={{color:"gray",
       border:"1px solid blue", 
       width:"200px",
       height:"50px",
       position:"relative", 
       cursor:"pointer", 
       left:"10rem", 
       fontWeight:"bold"}}
       >Modifier</button>
   </form>
   </div>
  )
}

export default Update