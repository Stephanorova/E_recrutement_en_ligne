const mongoose = require("mongoose")

const TeameSchema = new mongoose.Schema({
 Matricule:{
    type:Number,
    require:true
 },
 Photo:{
    type:String,
    require:true
 },
 Nom:{
   type:String,
   require:true
},
Prenom:{
   type:String,
   require:true
},
Activite:{
    type:String,
    require:true
 },
})

 const Teame = mongoose.model("Teame", TeameSchema)
 exports.Teame = Teame;