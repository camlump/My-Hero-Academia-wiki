const mongoose = require('../db/connection.js')


const heroes = new mongoose.Schema({
    gender: {
        type: String,
        
        required: true,

        enum: ['male', 'female', 'unknown'],

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