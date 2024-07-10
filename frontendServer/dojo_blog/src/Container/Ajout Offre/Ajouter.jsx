
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
     <form onSubmit={handleAjoutAll} novalidate>
        <input type="text" placeholder='titre offre' onChange={(e)=>setAjout({...ajout, name: e.target.value})} className="form-control" id="validationCustom01"  required/>
        <input type="text" placeholder='genre' onChange={(e)=>setAjout({...ajout, Genre: e.target.value})} className="form-control" id="validationCustom02"  required/>
        <input type="text" placeholder='mission' onChange={(e)=>setAjout({...ajout, Mission: e.target.value})} className="form-control" id="validationCustom03" required/>
        <textarea type="text" placeholder='profil' onChange={(e)=>setAjout({...ajout, Profil: e.target.value})} className="form-control" id="validationCustom04" required/>
     <div class="col-12">
          <button class="btn btn-primary" type="submit">Ajouter</button>
     </div>
    </form>
    </div>
  )
}
