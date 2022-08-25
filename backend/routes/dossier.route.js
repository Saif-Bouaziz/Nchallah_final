const express = require('express');
const { FindAllDossier } = require('../controller/dossier.controller');
const router = express.Router()


/* find all users */
router.get('/dossier', FindAllDossier)

module.exports = router; 