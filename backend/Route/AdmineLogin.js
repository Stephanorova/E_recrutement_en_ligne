const bcrypt = require("bcrypt")
const router = require("express").Router()
const AuthTokenAdmine = require("../AuthToken/AuthTokenAdmin")
const Joi = require("joi")
const { Admine } = require("../Model/Admine")



router.post("/", async(req,res)=>{
    const Schema = Joi.object({
        Email : Joi.string().min(3).max(100).required().email(),
        Password : Joi.string().min(3).max(100).required(),
    })

    const {error} = Schema.validate(req.body)

    if (error) {
        res.status(400).send("erreur de validation schema")
    }
  

    
    let admine = await Admine.findOne({Email : req.body.Email})


    if (!admine) {
      return  res.status(400).send("Admine n'exist pas !!!")
    }

    
    const valider = await bcrypt.compare(req.body.Password, admine.Password)
   if (!valider) {
     return res.status(404).send("invalide email ou mot de passe...")
   }

   const token = AuthTokenAdmine(admine)
   res.send(token)


})

module.exports = router;