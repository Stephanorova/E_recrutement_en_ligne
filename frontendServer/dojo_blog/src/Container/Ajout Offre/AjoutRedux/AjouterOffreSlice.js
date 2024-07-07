import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import jwtDecode from "jwt-decode"



const initialState = {
    token: localStorage.getItem("token"),
    name:"",
    Genre:"",
    Mission:"",
    Profil:"",
    _id:"",
    offreStatus: "",
    offreError:"",
}

export const registeroffre = createAsyncThunk(
    'offre/registeroffre',
   async (ajout,{rejectWithValue})=>{
        try {
         const token = await axios.post("http://localhost:5000/api/offre",{
                name: ajout.name,
                Genre: ajout.Genre,
                Mission: ajout.Mission,
                Profil: ajout.Profil,
                
            })
       localStorage.setItem("reponse", token.data)
       return token.data

        } catch (error) {
           return rejectWithValue(error.reponse.data)
        }
    }
)

const offreSlice = createSlice({
    name:"offre",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(registeroffre.pending,(state,action)=>{
               return {
                ...state,
                offreStatus:"pending"
               }
        });
        builder.addCase(registeroffre.fulfilled,(state,action)=>{
              if (action.payload) {
                 const ajout = jwtDecode(action.payload) 

                 return {
                    ...state,
                    token: action.payload,
                    _id:ajout._id,
                    name: ajout.name,
                    Genre: ajout.Genre,
                    Mission: ajout.Mission,
                    Profil: ajout.Profil,
                    offreStatus: "success"
                 }
              } else {
                return state
              }
        });
        builder.addCase(registeroffre.rejected,(state,action)=>{
               return {
                ...state,
                offreError:"rejected"
               }
        });

    }})

export default offreSlice.reducer;