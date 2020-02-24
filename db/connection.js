//import mongoose

const mongoose = require('mongoose');

const connectiontring = process.env.MONGODB_URI || "mongodb://localhost/my-hero-wiki";

//open connection to the mongo database

mongoose.connect(connectiontring, { useNewUrlParser: true})
    .then(()=>{
        console.log("connected to mongo at: " + connectiontring);

    });
//Export the mongoose object

module.exports = mongoose