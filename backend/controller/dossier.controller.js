const dossier = require('../models/dossier.models')



const FindAllDossier = async (req, res) => {
    try {
        const data = await dossier.find()
        res.status(201).json(data)
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = {
    FindAllDossier
};