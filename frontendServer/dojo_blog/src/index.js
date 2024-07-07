import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from "react-redux";
import AjouterOffreReducer from "./Container/Ajout Offre/AjoutRedux/AjouterOffreSlice";
import AuthReducer, { registerLoader } from "./Componente/AuthRedux/AuthRedux";
import 'bootstrap/dist/css/bootstrap.css';


const stor = configureStore({
      reducer: {
        offre : AjouterOffreReducer,
        auth: AuthReducer,
      },
    })

stor.dispatch(registerLoader(null)) 
ReactDOM.render(
      <Provider store={stor}>
            <App/>
      </Provider>
,document.querySelector("#root"));