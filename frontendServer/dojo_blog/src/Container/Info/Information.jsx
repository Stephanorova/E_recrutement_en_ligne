import './info.css'
import axios from "axios"
import {useEffect,useState} from "react"
import CloseIcons from "@mui/icons-material/Close"




const base_url = "http://localhost:5000/api/candidat"

const Information = () => {
const[informe,setInfo]= useState()


useEffect(()=>{
  const getAllOfre = async()=>{
     try {
         const url = `${base_url}`
         const {data} = await axios.get(url)
         setInfo(data)
         console.log(data);
     } catch (error) {
         console.log(error);
     }
  }
  getAllOfre()
}, [])


const handleSuppression = (_id)=>{
        axios.delete("http://localhost:5000/api/candidat/"+_id)
        .then(res =>{
          return Location.reload(res);
        })
        .catch(err => console.log(err))
}




  return (
    <div className='Information'>
      <div style={{fontWeight:"bold", fontSize:"20px"}}>
        Information dee personne qui déjà inscrit dans ce site
      </div>
      <div className='Info'>
    {
      informe?.map((index)=>{
        return(
          <div className='cage' key={index._id}>
              <span className='inf'>{index.Nom} {index.Prenom} faire une inscription dans cette plateforme son email address est {index.Email}</span>
              <span className='close' onClick={()=>handleSuppression(index._id)}><CloseIcons/></span>
          </div>
        )
      })
    }
    </div>
    </div>
  )
}

export default Information