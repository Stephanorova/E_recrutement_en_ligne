import { Affichage } from '../Affichage/Affichage'
import { Pagination } from '../Pagination/Pagination'
import { Recherche } from '../Recherche/Recherche'
import './list.css'
import {useEffect, useState} from "react"
import axios from "axios"
import {useHistory} from "react-router-dom"

const base_url = "http://localhost:5000/api/offre"

export const List = () => {
  const[objet,setObject] = useState({})
  const[filterGenr,setFilterGenre]= useState([])
  const[page,setPage] = useState(1)
  const[search,setSearch]=useState("")

  const history = useHistory()

  useEffect(()=>{
    const getAllOfre = async()=>{
       try {
           const url = `${base_url}?page=${page}&Genre=${filterGenr.toString()}&search=${search}`
           const {data} = await axios.get(url)
          setObject(data)
           console.log(data);
       } catch (error) {
           console.log(error);
       }
    }
    getAllOfre()
}, [page,filterGenr,search])


  return (
    <div className='liste-offre'>
        <div className='bodyRigth'>
        <div className="cherche">
        <Recherche search={search}
        setSearch={(search)=>setSearch(search)}/>
      <div className="ajouetr" onClick={()=>history.push("/ajouter")}>
        <label style={{cursor:"pointer"}}>Ajouter</label>
      </div>
        </div>
        <div className="center">
        <Affichage offres={ objet.offres ? objet.offres: [] } />   
        </div>
       <div >
       <Pagination
        page={page}
        limit={objet.limit ? objet.limit : 0}
        total={objet.total ? objet.total : 0}
        setPage={(page)=>setPage(page)}
        />
       </div>
       </div>
    </div>
  )
}

