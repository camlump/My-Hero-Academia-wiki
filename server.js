const express = require('express')
const app = express()
const methodOverride = require('method-override')


const studentRouter  = require('./controllers/student')
//const heroRouter = require('./controllers/hero')
//const villainRouter = require('./controllers/villain')






app.use(express.urlencoded({extended: true}))


app.use(express.json())


app.use(methodOverride('_method'))


app.use(express.static(__dirname + '/public'))


app.set('view engine', 'hbs')


app.use('/students', studentRouter);
// app.use('/hero', heroRouter);
// app.use('/villain', villainRouter);

app.get('/', (req, res)=> {
    res.render('home');
});

const PORT = process.env.PORT || 3000


app.listen(PORT, ()=> {
    console.log(`App is listening on port ${PORT}`)
})