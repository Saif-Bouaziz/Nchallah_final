const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DossierSchema = new Schema({
    Num: String,
    Num_affaire: String,
    emplacement: String,
    Client : String,
    Tel: String,
    Mission: String,
    Adversaire: String
   
}, {timestamps: true})


module.exports = mongoose.model('dossier', DossierSchema)