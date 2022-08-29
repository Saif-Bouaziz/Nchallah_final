var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
require('dotenv').config()


<<<<<<< HEAD
const routerUsers= require('./routes/users.route');
const routerTimbre= require('./routes/timbre.route');
const routerRecette= require('./routes/recette.route');
const routerEmplacement= require('./routes/emplacement.route');
const routerPhotocopie= require('./routes/photocopie.route'); 
const routerUtilisateurs= require('./routes/utilisateurs.route')  
const routerPrimes= require('./routes/primes.route')  
const routerParametres= require('./routes/parametres.route')  
const routerHonoraires= require('./routes/honoraires.route') 
const routerTransport= require('./routes/transport.route') 
const routerGreffier= require('./routes/greffier.route')
const routerClient= require('./routes/client.route')
=======
const routerUsers = require('./routes/users.route');
const routerTimbre = require('./routes/timbre.route');
const routerRecette = require('./routes/recette.route');
const routerEmplacement = require('./routes/emplacement.route');
const routerPhotocopie = require('./routes/photocopie.route');
const routerUtilisateurs = require('./routes/utilisateurs.route')
const routerPrimes = require('./routes/primes.route')
const routerParametres = require('./routes/parametres.route')
const routerHonoraires = require('./routes/honoraires.route')
const routerTribunaux = require('./routes/Tribunaux.route')
const routerService = require('./routes/service.route')
const routerDossier = require('./routes/Dossier.route')


>>>>>>> ae77af0ae06f7429ebd36b8bd023099f847c6ccf


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect("mongodb://saif:ipeis2020@ac-zxwojzh-shard-00-00.7c4r6sr.mongodb.net:27017,ac-zxwojzh-shard-00-01.7c4r6sr.mongodb.net:27017,ac-zxwojzh-shard-00-02.7c4r6sr.mongodb.net:27017/test?ssl=true&replicaSet=atlas-msqy6z-shard-0&authSource=admin&retryWrites=true&w=majority")
    .then(() => console.log('DB CONNECTED'))
    .catch(err => console.log(err.message))




app.use('/api', routerUsers);
app.use('/api', routerTimbre);
app.use('/api', routerRecette);
app.use('/api', routerEmplacement);
app.use('/api', routerPhotocopie);
app.use('/api', routerUtilisateurs)
<<<<<<< HEAD
app.use('/api', routerTransport)
app.use('/api', routerClient)

 
app.use('/api', routerPrimes) ;
app.use('/api', routerGreffier) ;

app.use('/api', routerParametres) ;

=======
app.use('/api', routerPrimes);
app.use('/api', routerParametres);
>>>>>>> ae77af0ae06f7429ebd36b8bd023099f847c6ccf
app.use('/api', routerHonoraires);
app.use('/api', routerTribunaux);
app.use('/api', routerService);
app.use('/api', routerDossier);





module.exports = app;
