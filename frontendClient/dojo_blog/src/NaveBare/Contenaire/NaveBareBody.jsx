

import NavBotom from "../NaveBotom/NavBotom"
import"./NaveBar.css"
import Body from "../../Body/Bodys/Body"







function NaveBareBody() {
  return (
    <div>
        <div className="sticky">
        <NavBotom/> 
        </div>
        <Body/>     
    </div>
  )
}

export default NaveBareBody