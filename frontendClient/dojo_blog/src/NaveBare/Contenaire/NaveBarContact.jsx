import Contact from '../../Contact/Contact'
import NavBotom from '../NaveBotom/NavBotom'
import './NaveBar.css'

const NaveBarContact = () => {
  return (
    <div>
    <div className="sticky">
        <NavBotom/> 
        </div>
        <Contact/>  
    </div>
  )
}

export default NaveBarContact