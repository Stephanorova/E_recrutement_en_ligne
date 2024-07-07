const mongoose = require("mongoose")


const OffreSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    Genre:{
        type:[String],
         required: true},
    Mission:{
        type:String,
         required: true},
    Profil:{
        type:[String], 
        required: true},
})

module.exports = mongoose.model("offres", OffreSchema);