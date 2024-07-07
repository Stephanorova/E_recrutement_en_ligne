import'./body.css'
import { useEffect,  useState } from 'react'
import axios from "axios"
import AffichageOffre from '../Affichage/AffichageOffre'
import Pagination from '../Pagination/Pagination'
import Recherche from '../Recherche/recherche'
import Menu from '../Menu/Menu'

const base_url = "http://localhost:5000/api/offre"

function Body() {



const[objet,setObject] = useState({})
const[filterGenr,setFilterGenre]= useState([])
const[page,setPage] = useState(1)
const[search,setSearch]=useState("")


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
      <div className='body'>
        <div className="bodyLeft">
        <Menu 
        setSearch={(search)=>setSearch(search)}
        filterGenr={filterGenr}  
        Genre={objet.Genre ? objet.Genre : []} 
        setFilterGenre={(Genre)=>setFilterGenre(Genre)} 
        />
        </div>
      <div className='bodyRigth'>
        <div className="cherche">
        <Recherche search={search}
        setSearch={(search)=>setSearch(search)}/>
        </div>
        <div className="center">
        <AffichageOffre offres={ objet.offres ? objet.offres: [] } />   
        </div>

        <Pagination
        page={page}
        limit={objet.limit ? objet.limit : 0}
        total={objet.total ? objet.total : 0}
        setPage={(page)=>setPage(page)}
        />
    
       </div>
      </div>
  )
}

export default Body