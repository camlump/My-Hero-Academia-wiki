let express = require('express');

let homeRouter = express.Router();

const hero = require('../models/hero');

const student = require('../models/Students');

const villain = require('../models/villains');

homeRouter.get('/', (req, res)=>{
    let hero= null;
    
})




module.exports = homeRouter;
