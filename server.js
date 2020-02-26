const express = require('express')
const app = express()
const methodOverride = require('method-override')


const studentRouter  = require('./controllers/student')
const heroRouter = require('./controllers/hero')
const villainRouter = require('./controllers/villain')

 const Student = require('./models/Students')

 const Villain = require('./models/villains');
 
 const Hero = require('./models/hero');






app.use(express.urlencoded({extended: true}))


app.use(express.json())


app.use(methodOverride('_method'))


app.use(express.static(__dirname + '/public'))


app.set('view engine', 'hbs')


app.use('/students', studentRouter);
 app.use('/heroes', heroRouter);
app.use('/villains', villainRouter);

app.get('/', (req, res)=> {
   let foundStudent = null;
   let foundVillain = null;
   let foundHero = null;
   Hero.find().then(heroes=>{
       let i = Math.floor(Math.random() * heroes.length);
       foundHero = heroes[i]
       return Student.find()
   }).then( (students)=>{
    let j = Math.floor(Math.random() * students.length)
    foundStudent = students[j]
    return Villain.find()
   }).then( (villains)=>{
    let k = Math.floor(Math.random() * villains.length)
    foundVillain = villains[k]
    res.render('home', { foundHero, foundStudent, foundVillain });
   }).catch((e)=>{
       console.log(e);
   });
});


const PORT = process.env.PORT || 3000


app.listen(PORT, ()=> {
    console.log(`App is listening on port ${PORT}`)
})


