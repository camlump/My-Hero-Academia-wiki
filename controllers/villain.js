let express = require('express');

let villainRouter = express.Router();

const villain = require('../models/villains');


villainRouter.get('/', (req, res)=>{
    villain.find().then((villains)=>{
        console.log(villains);
        res.render('villain/index', { villains });
    });
});

villainRouter.get('/newVillains', (req, res)=>{
    res.render('villain/newVillain')
});

villainRouter.post('/', (req, res)=>{
    villain.create(req.body).then(()=>{
        res.redirect('/villains')


    }).catch((err)=>{
        console.log(err)
    });
});

villainRouter.get('/:id', (req, res)=>{
    villain.findById(req.params.id).then((villain)=>{
        console.log(villain)
        res.render('villain/show', { villain });
    });
});

villainRouter.put('/:id', (req, res)=>{
    villain.findByIdAndUpdate(req.params.id, req.body).then((villain)=>{
        res.redirect('/villains/' + villain.id);
    }).catch((e) => {
        console.log(e)
    })
});

villainRouter.get('/:id/edit', (req, res)=> {
    villain.findById(req.params.id).then((villain)=>{
        res.render('villain/editVillainForm', { villain });
    });
});

villainRouter.delete('/:id', (req, res)=>{
    villain.findByIdAndRemove(req.params.id).then(()=>{
        res.redirect('/villains')
    });
});


module.exports = villainRouter