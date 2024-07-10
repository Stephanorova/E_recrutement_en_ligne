import { useEffect, useState } from 'react'
import'./index.css'
import {useParams} from "react-router-dom"
import axios from 'axios'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const View = () => {
    const [affiche, setAffiche]= useState([])
    const { _id } = useParams()
     
    useEffect(()=>{
          axios.get("http://localhost:5000/api/teame/"+_id)
          .then(res=>{
             setAffiche(res.data)
          })
      }, [])

      const history = useHistory()

  return (
    <div className='view'>
        <div className="cadre">
            <span>{affiche?.Matricule}</span>
            <span>{affiche?.Photo}</span>
            <span>{affiche?.Nom}</span>
            <span>{affiche?.Prenom}</span>
            <span>{affiche?.Activite}</span>
            <button onClick={()=>history.push("/teame")}>retoure</button>
        </div>
    </div>
  )
}

export default View