const express = require('express')
const app = express()
const methodOverride = require('method-override')


const studentRouter  = require('./controllers/student')
const heroRouter = require('./controllers/hero')
const villainRouter = require('./controllers/villain')

// const student = require('../models/Students');

// const villain = require('../models/villains');

// const hero = require('../models/hero');






app.use(express.urlencoded({extended: true}))


app.use(express.json())


app.use(methodOverride('_method'))


app.use(express.static(__dirname + '/public'))


app.set('view engine', 'hbs')


app.use('/students', studentRouter);
 app.use('/heroes', heroRouter);
app.use('/villains', villainRouter);

app.get('/', (req, res)=> {
    // let hero = null;
    // let villain = null;
    // let student = null;
    // hero.findbyId().then((foundHero)=>{
    //     return hero = foundHero;
    // }).then(villain.findbyId((foundVillain)=>{
    //     return villain = foundVillain;
    // })).then(student.findbyId((foundStudent)=>{
    //     return student = foundStudent
    // }));
   res.render('home');
});

const PORT = process.env.PORT || 3000


app.listen(PORT, ()=> {
    console.log(`App is listening on port ${PORT}`)
})

