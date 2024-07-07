
const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
    Nom: {
        type: String,
        require: true
    },
    Prenom: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    Password: {
        type: String,
        require: true
    },
})

const Admine = mongoose.model("Admine", AdminSchema);
exports.Admine = Admine;