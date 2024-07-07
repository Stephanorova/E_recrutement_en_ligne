const jwt = require("jsonwebtoken")

const AuthTokenAdmine = (admine)=>{
    const secretkey = process.env.SECRET_KEY;

    const token = jwt.sign({
        _id: admine._id,
        Nom: admine.Nom,
        Email: admine.Email
    },
    secretkey
    )
    return token
    
}
module.exports = AuthTokenAdmine;