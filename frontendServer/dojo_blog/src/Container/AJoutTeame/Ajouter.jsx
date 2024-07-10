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
   <form  onSubmit={handleAjout} className="row g-3 needs-validation" novalidate>
       <input type="number" placeholder='Matricule' onChange={(e)=>setAjouter({...ajouter, Matricule: e.target.value})} className="form-control" id="validationCustom01"  required/>
       <input type="text" placeholder='Photo'onChange={(e)=>setAjouter({...ajouter, Photo: e.target.value})} className="form-control" id="validationCustom02"  required/>
       <input type="text" placeholder='Nom' onChange={(e)=>setAjouter({...ajouter, Nom: e.target.value})} className="form-control" id="validationCustom03" required/>
       <input type="text" placeholder='Prenom'onChange={(e)=>setAjouter({...ajouter, Prenom: e.target.value})} className="form-control" id="validationCustom04" required/>
       <input type="text" placeholder='Activite'onChange={(e)=>setAjouter({...ajouter, Activite: e.target.value})} className="form-control" id="validationCustom05" required/>
       <div class="col-12">
       <button class="btn btn-primary" type="submit">Ajouter</button>
  </div>
   </form>
   </div>
  )
}

export default Ajouter