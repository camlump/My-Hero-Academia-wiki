const mongoose = require('../db/connection.js')


const heroes = new mongoose.Schema({
    
    heroName: {
        type: String,

        
    },
    
    
    gender: {
        type: String,
        
      

       // enum: ['male', 'female', 'unknown'],

    },

    img: {
        type: String,

       
    },

    teacher: {
        type: String,

       

       // enum: [ 'yes', 'No'],
    },


    heroStatus: {
        type: String,

        

        //enum: [ 'Active', 'Active', 'Former'],
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


module.exports = mongoose.model('heroes', heroes)