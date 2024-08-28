import './apropos.css'
import axios from 'axios';
import { useEffect, useState } from 'react'



const base_url = "http://localhost:5000/api/teame/";

const Teame = () => {
  const[teame,setTeame]= useState()

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


  return (
    <div className='apropos'>
       <div className="teame">
          <div className="heade">
          <div className="deve">
            <span>12</span>
          <span>Développeur</span>
          </div>
          <div className="comerce">
          <span>18</span>
          <span>Commercial</span>
          </div>
          <div className="gestion">
          <span>11</span>
          <span>Gestionaire</span>
          </div>
          <div className="securisation">
          <span>6</span>
          <span>Sécurité</span>
          </div>
        </div>

  <table class="table" style={{marginTop:"50px", marginLeft:"25px"}}>
  <caption>List des employés</caption>
  <thead>
    <tr>
      <th scope="col">Identité</th>
      <th scope="col">Profil</th>
      <th scope="col">Nom</th>
      <th scope="col">Prénom</th>
      <th scope="col">Activité</th>
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
      </tr>
      ))
    }
  </tbody>
 </table> 
</div>     
</div>
  )
}

export default Teame