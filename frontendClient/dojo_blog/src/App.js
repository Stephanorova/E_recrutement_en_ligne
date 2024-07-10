import {BrowserRouter, Route, Switch } from "react-router-dom"
import"./App.scss"
import NaveBareBody from "./NaveBare/Contenaire/NaveBareBody"
import Footer from "./Footer/Footer"
import NaveTop from "./NaveBare/NaveTop/NaveTop"
import NaveBareLogin from "./NaveBare/Contenaire/NaveBareLogin"
import NaveFichier from "./NaveBare/Contenaire/NaveFichier"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import NaveBarContact from "./NaveBare/Contenaire/NaveBarContact"
import NaveService from "./NaveBare/Contenaire/NaveService"
import NaveApropos from "./NaveBare/Contenaire/NaveApropos"



export default function App() {

  return(
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
      <NaveTop/>
      <Switch>
      <Route path="/" exact component={()=> <NaveBareBody/>}/>
      <Route path="/login" component={()=> <NaveBareLogin/>}/>
      <Route path="/cv" component={()=> <NaveFichier/>}/>
      <Route path="/contact" component={()=> <NaveBarContact/>}/>
      <Route path="/service" component={()=> <NaveService/>}/>
      <Route path="/apropos" component={()=> <NaveApropos/>}/>
      </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}