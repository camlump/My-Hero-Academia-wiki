const express = require('express')
const app = express()
const methodOverride = require('method-override')


const studentRouter  = require('./controllers/student')
const heroRouter = require('./controllers/hero')
const villainRouter = require('./controllers/villain')

//  const Student = require('../models/Students');

//  const Villain = require('../models/villains');
 
//  const Hero = require('../models/hero');






app.use(express.urlencoded({extended: true}))


app.use(express.json())


app.use(methodOverride('_method'))


app.use(express.static(__dirname + '/public'))


app.set('view engine', 'hbs')


app.use('/students', studentRouter);
 app.use('/heroes', heroRouter);
app.use('/villains', villainRouter);

app.get('/', (req, res)=> {
    // let foundHero = null;
    // let foundVillain = null;
    // let foundStudent = null;
    // Hero.find().then((heros)=>{

    //     return foundHero = hero;
    // }).then(Villain.findbyId((villain)=>{
    //     return foundVillain = villain;
    // })).then(Student.findbyId((student)=>{
    //     return foundStudent = student
    // }));
   res.render('home');
});

const PORT = process.env.PORT || 3000


app.listen(PORT, ()=> {
    console.log(`App is listening on port ${PORT}`)
})


