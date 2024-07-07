import './recherche.css'

const Recherche = ({setSearch}) => {

    
  return (
    <div>
        <input type="text" placeholder='recherche' 
           className='serche'
           onChange={({currentTarget:input})=>setSearch(input.value)} />
    </div>
  )
}

export default Recherche