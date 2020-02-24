const mongoose = require('../db/connection.js')



const villain = new mongoose.Schema({

    name: {
        type: String,

        required: true,
    },


    gender: {
        type: String,

        required: true,

        enum: ['male', 'female', 'unknown'],
    },

    img: {
        type: String,

        required: true,
    },

    legalStatus: {
        type: String,

        required: true,
        
    },

    affiliation: {
        type: String,

        required: true,

        enum: [ 'Shie Hassaikai', 'League of Viilains', 'Paranormal Liberation Front', 'Wolfram', 'uknown'],

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


});

module.exports = mongoose.model('villain', villain)