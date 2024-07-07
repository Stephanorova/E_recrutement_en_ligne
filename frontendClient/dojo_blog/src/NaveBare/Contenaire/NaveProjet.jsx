import Projet from "../../Projets/Projet"
import'./NaveBar.css'
import NavBotom from '../NaveBotom/NavBotom'

const NaveProjet = () => {
  return (
    <div>
    <div className="sticky">
    <NavBotom/> 
    </div>
    <Projet/>     
  </div>
  )
}

export default NaveProjet