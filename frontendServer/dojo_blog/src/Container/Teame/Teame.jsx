import { useEffect, useState } from 'react'
import'./teame.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';





const base_url = "http://localhost:5000/api/teame/";

const Teame = () => {

   const[teame,setTeame]= useState()

   const history = useHistory()


  useEffect(()=>{
    const getTeame= async()=>{
       try {
           const url = `${base_url}`
           const {data} = await axios.get(url)
           setTeame(data)
           console.log(data);
       } catch (error) {
           console.log(error);
       }
    }
    getTeame()
  }, [])

  const handleSuppression = (_id)=>{
    axios.delete("http://localhost:5000/api/teame/"+_id)
    .then(res =>{
       return Location.reload(res);
    })
    .catch(err => console.log(err))
}

  return (
    <div className='teame'>
      <h1>Employés</h1>
      <div className="ajouetr">
        <label style={{cursor:"pointer"}} onClick={()=>history.push("/ajout")}>Ajouter</label>
      </div>
  <table class="table" style={{marginTop:"50px", marginLeft:"70px", width:"70vw"}}>
  <caption>List des employés</caption>
  <thead>
    <tr>
      <th scope="col">Matricul</th>
      <th scope="col">Profil</th>
      <th scope="col">Nom</th>
      <th scope="col">Prénom</th>
      <th scope="col">Activité</th>
      <th scope="col">Action boutton</th>
    </tr>
  </thead>
  <tbody>
    {
      teame?.map((team)=>
        (
        <tr key={team._id}>
        <td>{team.Matricule}</td>
        <td><img src="/image/sise.PNG" className='images'/></td>
        <td>{team.Nom}</td>
        <td>{team.Prenom}</td>
        <td>{team.Activite}</td>
        <td style={{display:"flex", gap:"1rem"}}>
          <button className='btn btn-sm btn-info' onClick={()=>history.push( `/view/${team._id}`)}>View</button>
          <button className='btn btn-sm btn-primary' onClick={()=>history.push( `/update/${team._id}`)}>Modifier</button>
          <button className='btn btn-sm btn-danger' onClick={()=>handleSuppression(team._id)}>Supprimer</button>
        </td>
      </tr>
      ))
    }
  </tbody>
</table>
      </div>
  )
}

export default Teame