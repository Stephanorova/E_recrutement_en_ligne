const express = require("express")
const router = express.Router()
const Joi = require("joi")
const {Admine} = require("../Model/Admine")
const bcrypt = require("bcrypt")
const AuthTokenAdmine = require("../AuthToken/AuthTokenAdmin")


router.post("/", async(req,res)=>{
    const Schema = Joi.object({
        Nom : Joi.string().min(3).max(100).required(),
        Prenom : Joi.string().min(3).max(100).required(),
        Email : Joi.string().min(3).max(100).required().email(),
        Password : Joi.string().min(3).max(100).required(),
    })

    const {error} = Schema.validate(req.body)

    if (error) {
        res.status(400).send("erreur de validation schema")
    }

    let admine = await Admine.findOne({Email : req.body.Email})

    if (admine) {
        res.status(400).send("Admine existe deja !!!")
    }


  admine = new Admine({
    Nom : req.body.Nom,
    Prenom : req.body.Prenom,
    Email : req.body.Email,
    Password : req.body.Password,
  })

  const salt = await bcrypt.genSalt(10)
  admine.Password = await bcrypt.hash(admine.Password,salt)

admine = await admine.save()

const token = AuthTokenAdmine(admine)

res.send(token)

})

module.exports= router;