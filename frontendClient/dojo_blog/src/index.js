import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import App from "./App";
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from "react-redux";
import authReducer, { registerLoader } from "./ReduxSlice/authSlice";
import OffreReducer, { OffreThunk } from "./ReduxOffre/OffreSlice";
import { OffreApi } from "./ReduxOffre/OffreApi";
import AddReducer from "./ReduxFichier/AddSlice";
import 'bootstrap/dist/css/bootstrap.css';







const stor = configureStore({
  reducer: {
    auth : authReducer,
    offre : OffreReducer,
    Add : AddReducer,
    [OffreApi.reducerPath] : OffreApi.reducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(OffreApi.middleware)
})

stor.dispatch(OffreThunk()) 
stor.dispatch(registerLoader(null)) 

ReactDOM.render(

    <Provider store={stor}>
      <App/>
    </Provider>
,document.querySelector("#root"));