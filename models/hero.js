const mongoose = require('../db/connection.js')


const heroes = new mongoose.Schema({
    
    heroName: {
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

    teacher: {
        type: String,

        required: true,

        enum: [ 'yes', 'No'],
    },


    heroStatus: {
        type: String,

        required: true,

        enum: [ 'Active', 'Active', 'Former'],
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


module.exports = mongoose('heroes', heroes)