
//Import monogoose connection
const mongoose = require('../db/connection.js')

const students = new mongoose.Schema({
    
    name: {
        type: String,

        
    },

    gender: {
        type: String,
        
        enum: ['Male', 'Female', 'unknown'],
    },

    img: {
        type: String,

        
    },

     school: {
            type: String,
            
            //enum: [ 'U. A. High School', 'Shiketsu High School', 'Ketsubutsu Academy High Scool', 'Masegaki Primary School', 'Seiai Academy', 'Aldera Junior High'],
        },

    class: {
            type: String,

            

            enum: ['1-A', '1-B', 'unknown'],
        },
    

    overview: {
        type: String,
        
    },

    quirk: {
        type: String,

        
    },

    quirkDescription: {
        type: String,
        
       
    },
    
})



module.exports = mongoose.model('Students', students);




