//import mongoose

const mongoose = require('mongoose');

// const connectiontring = process.env.MONGODB_URI || "mongodb://localhost/my-hero-wiki";

// //open connection to the mongo database

// mongoose.connect(connectiontring, { useNewUrlParser: true})
//     .then(()=>{
//         console.log("connected to mongo at: " + connectiontring);

//     });

//Export the mongoose object
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}
else {
  mongoose.connect('mongodb://localhost/my-hero-wiki');
}
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
  }
);
mongoose.connection.once('open', () => {
  console.log("Mongoose has connected to MongoDB!");
});
module.exports = mongoose