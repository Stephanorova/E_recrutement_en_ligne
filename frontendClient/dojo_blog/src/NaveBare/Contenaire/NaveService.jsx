import Service from '../../Service/Service'
import NavBotom from '../NaveBotom/NavBotom'
import './NaveBar.css'

const NaveService = () => {
  return (
    <div>
    <div className="sticky">
        <NavBotom/> 
        </div>
        <Service/>  
    </div>
  )
}

export default NaveService