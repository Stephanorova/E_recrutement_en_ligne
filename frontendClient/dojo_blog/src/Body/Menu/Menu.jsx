import'./menu.css'
import MenuBookIcons from "@mui/icons-material/MenuBook"
import SearchIcons from "@mui/icons-material/Search"
import { useHistory } from "react-router-dom"

const Menu = ({setSearch,Genre,filterGenr, setFilterGenre}) => {

  const history = useHistory()

  const onChange =({currentTarget:input})=>{
    if (input.checked) {
      const state =[...filterGenr, input.value]
      setFilterGenre(state)
    } else {
      const state =filterGenr.filter((val)=> val !==input.value)
      setFilterGenre(state)
    }
}

  return (
    <div className="lef">
    <div className="menu">
     <span><MenuBookIcons/></span>
      Tous les menus
    </div>
    <div className="searche">
         <input placeholder="recherche..." onChange={({currentTarget:input})=>setSearch(input.value)} />
         <span className='recherche'><SearchIcons /></span>
    </div>
    <div className="genreInput">
    {
            Genre.map((Genre)=>{
                return(
                    <div key={Genre} className='btn'>
                        <input type='checkbox'
                         value={Genre}
                         onChange={onChange}
                        />
                        <span className='paragraphe'>{Genre}</span>
                    </div>
                )
            })
        }
    </div>
    <hr style={{color:"black"}}/>
  <div className="inscrire">
     <span onClick={()=>history.push("/login")}>Pour s' inscrire ou pour conneter cliquer ici!!.</span> 
  </div>
  </div>
  )
}

export default Menu