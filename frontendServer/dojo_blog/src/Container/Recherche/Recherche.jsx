import './recherche.css'
import SearchIcons from "@mui/icons-material/Search"


export const Recherche = ({setSearch}) => {
  return (
    <div className='searche'>
        <input type="text" placeholder='recherche' 
           className='serche'
           onChange={({currentTarget:input})=>setSearch(input.value)} />
           <SearchIcons/>
    </div>
  )
}
