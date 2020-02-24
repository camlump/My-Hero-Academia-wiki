
//Import monogoose connection
const mongoose = require('../db/connection.js')

const students = new mongoose.Schema({
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'unkown'],
    },

     school: {
            type: String,
            required: true,
            enum: [ 'U. A. High School', 'Shiketsu High School', 'Ketsubutsu Academy High Scool', 'Masegaki Primary School', 'Seiai Academy', 'Aldera Junior High'],
        },

    overview: {
        type: String,
        required: true,
    },

    quirk: {
        type: String,

        required: true,
    },

    quirkDescription: {
        type: String,
        
        required: true,
    },
    
})



module.exports = mongoose.model('Students', students);




