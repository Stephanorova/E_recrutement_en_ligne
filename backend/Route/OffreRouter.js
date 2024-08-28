 const router = require("express").Router();
 const Offres = require("../Model/Offres");
const Joi = require("joi")


 router.get("/", async(req,res)=>{
  try {
      const page = parseInt(req.query.page) -1 || 0;
      const limit = parseInt(req.query.limit)||6;
      const search = req.query.search || "";
      let Genre = req.query.Genre || "All";

      const genreOption = [
        "informatique",
        "RH",
        "comptable",
      ];

      Genre === "All"
           ?(Genre = [...genreOption])
           : (Genre = req.query.Genre.split(","));
    

     
        const offres = await Offres.find({name:{$regex:search, $options: "i"}})
        .where("Genre")
        .in([...Genre])
        .skip(page * limit)
        .limit(limit)

        const total = await Offres.countDocuments({
          Genre:{$in:[...Genre]},
          name:{$regex:search, $options:"i"}
        })

        const reponse ={
           error: false,
           total,
           page: page + 1,
           limit,
           Genre: genreOption,
           offres,
        };

        res.status(200).json(reponse);




  } catch (error) {
      console.log(error);
      res.status(404).json({error:true, message:"erreur de serveur"})
  }

})

router.post("/", async(req,res)=>{
 
 const AjoutOffre = new Offres({
    name : req.body.name,
    Genre : req.body.Genre,
    Mission : req.body.Mission,
    Profil : req.body.Profil,
  })
   await AjoutOffre.save()
   .then((ajout)=>{
        if (ajout) {
          return res.status(200).json({success: true, message:"enregistrement bient success"})
        } else {
          return res.status(200).json({success: false, message:"enregistrement failid!!!!"})
        }
   })
   .catch(err =>{
      res.status(404).json({erreur: err})
   })
})



router.delete("/supp/:_id", async(req,res)=>{

  const supprimer = await Offres.findByIdAndDelete(req.params._id)
   
    if (supprimer) {
      return res.status(200).send("Offre bien supprimer")
    }

    res.send(supprimer)

})

router.get("/:_id", async(req,res)=>{
   const AfficheID = await Offres.findById(req.params._id)
    if (AfficheID) {
      return res.status(200).json("success")
    } else {
      return res.status(404).json("filed")
    }
})


module.exports = router;