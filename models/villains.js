const mongoose = require('../db/connection.js')



const villain = new mongoose.Schema({

    name: {
        type: String,

        
    },


    gender: {
        type: String,

        

      //  enum: ['male', 'female', 'unknown'],
    },

    img: {
        type: String,

       
    },

    legalStatus: {
        type: String,

        
        
    },

    affiliation: {
        type: String,

        

        //enum: [ 'Shie Hassaikai', 'League of Viilains', 'Paranormal Liberation Front', 'Wolfram', 'uknown'],

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


});

module.exports = mongoose.model('villain', villain)