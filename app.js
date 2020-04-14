// This is already handled in express
// const http = require('http');
// const server = http.createServer((res,req){});
// server.listen(3000);

const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
const mongoose = require('mongoose');

const registrationRoutes = require('./routes/login/registration');
const errorRouter = require('./controllers/erros'); 
const isAuth = require('./middleware/isAuth');
const csrf = require('csurf');

app.use(bodyParser.urlencoded({extended:false})); // bodyParser will do the parsing of req body json data, urlencoded is a function that will execute next() inside another middleware that is defined in express

app.use('/login',registrationRoutes);     //All the routes of registration will become the part of app.js
// his will be used to authenticate user. 
// Whichever page is required authentication for those api call will add isAuth
// app.use('/login',isAuth, registrationRoutes);   

app.use(errorRouter.getError);

// mongoConnect(() => {
//     app.listen(3000);
// });

mongoose.connect('mongodb+srv://bothrag:gPzqyWuHOZyXQbjA@mycluster-coo01.mongodb.net/Networking?retryWrites=true&w=majority')
.then(result => {
    console.log("Mongoose connected");
    app.listen(5000);
}).catch(err => {
    console.log(err);
})
