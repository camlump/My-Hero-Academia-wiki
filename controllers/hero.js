let express = require('express');

let heroRouter = express.Router();

const hero = require('../models/hero');


heroRouter.get('/', (req, res)=>{
    hero.find().then((heroes)=>{
        console.log(heroes);
        res.render('hero/index', { heroes });
    });
});

heroRouter.get('/newHeroes', (req, res)=>{
    res.render('hero/newHero')
});

heroRouter.post('/', (req, res)=>{
    hero.create(req.body).then(()=>{
        res.redirect('/')

    }).catch((err)=>{
        console.log(err)
    })
})

heroRouter.get('/:id', (req, res)=>{
    hero.findById(req.params.id).then((hero)=>{
        console.log(hero)
        res.render('hero/show', { hero });
    });
});


heroRouter.put('/:id', (req, res)=>{
    hero.findByIdAndUpdate(req.params.id, req.body).then((hero)=>{
        res.redirect('/heroes/' + hero.id);
    });
});


heroRouter.get('/:id/edit', (req, res)=> {
    hero.findById(req.params.id).then((hero)=>{
        res.render('hero/editHeroForm', { hero });
    });
});


heroRouter.delete('/:id', (req, res)=>{
    hero.findByIdAndRemove(req.params.id).then(()=>{
        res.redirect('/')
    });
});



module.exports = heroRouter