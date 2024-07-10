const express = require("express")
const { Teame } = require("../Model/Teame")
const router = express.Router()


router.get("/", async(req,res)=>{
   const teame =  await Teame.find()
   res.send(teame)
})

router.post("/", async(req,res)=>{
    const ajouter = new Teame({
        Matricule : req.body.Matricule,
        Photo : req.body.Photo,
        Nom : req.body.Nom,
        Prenom : req.body.Prenom,
        Activite : req.body.Activite
    })

    await ajouter.save().then((ajout)=>{
        if (ajout) {
            res.status(200).json("bien success")
        } else {
            res.status(200).json("failed ajout")
        }
    })
})

router.delete("/:_id", async(req, res)=>{
    await Teame.findByIdAndDelete(req.params._id)
    .then((suppre)=>{
        if (suppre) {
            res.status(200).json("bien success")
        } else {
            res.status(200).json("failed suppression")
        }
    })
})

 router.put("/:_id", async(req,res)=>{
    await Teame.findByIdAndUpdate(req.params._id, {
         Matricule : req.body.Matricule,
         Photo : req.body.Photo,
         Nom : req.body.Nom,
         Prenom : req.body.Prenom,
         Activite : req.body.Activite,
     },{
         new : true,
     }
     )
     .then((suppre)=>{
         if (suppre) { 
             res.status(200).json("bien success") 
        } else {
             res.status(200).json("failed suppression")
         }
     })

 })

router.get("/:_id", async(req,res)=>{
   const affiche = await Teame.findById(req.params._id)
    res.send(affiche)
})

module.exports=router;