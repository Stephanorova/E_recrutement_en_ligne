
import"./App.scss"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import { Login } from "./Componente/Logine/Login"
import Inscription from "./Componente/Inscription/Inscription"
import { PageList } from "./Page/ListPage/PageList"
import { PageAjout } from "./Page/AjoutPage/PageAjout"
import InformationPage from "./Page/Information/InformationPage"
import { ProjetPage } from "./Page/ProjetPage/ProjetPage"
import { LinePage } from "./Page/LineChartPage/LinePage"
import { ChartBare } from "./Page/BareChartPage/ChartBare"
import { TeamePage } from "./Page/TeamePage/TeamePage"
import { PageView } from "./Page/ViewPage/PageView"
import { PageAjouts } from "./Page/AjouPage/PAgeAjout"
import { PageModifie } from "./Page/ModifiePage/PageModifie"




export default function App() {

  return(
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={()=><Login/>} />
        <Route path="/inscription" component={()=><Inscription/>} />
        <Route path="/list" component={()=><PageList/>} />
        <Route path="/infonce" component={()=><InformationPage/>} />
        <Route path="/ajouter" component={()=><PageAjout/>} />
        <Route path="/listeProjet" component={()=><ProjetPage/>} />
        <Route path="/linechart" component={()=><LinePage/>} />
        <Route path="/barechart" component={()=><ChartBare/>} />
        <Route path="/teame" component={()=><TeamePage/>} />
        <Route path="/view/:_id" component={()=><PageView/>} />
        <Route path="/ajout" component={()=><PageAjouts/>} />
        <Route path="/update/:_id" component={()=><PageModifie/>} />
      </Switch>
      </BrowserRouter>
    </div>
  )
}