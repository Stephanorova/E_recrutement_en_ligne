const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser');
const app = express();
const mongoose = require("mongoose");
const offre = require("./Route/OffreRouter")
const candidat = require("./Route/candidatsRoute")
const Login = require("./Route/LoginRoute")
const Admine = require("./Route/AdmineRoute")
const AdminLogin = require("./Route/AdmineLogin")
const Fichier = require("./Route/Fichier")
const teame = require("./Route/TeameRouter")

require("dotenv").config()



//midleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//route API
app.use("/api/offre", offre)
app.use("/api/candidat", candidat)
app.use("/api/login", Login)
app.use("/api/admine", Admine)
app.use("/api/logine", AdminLogin)
app.use("/api/send-email", Fichier)
app.use("/api/teame", teame)

//creation de serveure
const Port = process.env.PORT || 5000 
app.listen(Port, console.log(`serveur runing in http://localhost:${Port}`))


//connexion au base de donné
const url = process.env.DB_URL
mongoose.connect(url, {
    dbName:"recrute",
})
.then(()=>{
    console.log("connexion successfull..");
})
.catch((Error)=>{
   console.log(Error);
})
