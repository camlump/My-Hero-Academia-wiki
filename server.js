const express = require('express')
const app = express()
const methodOverride = require('method-override')


const studentRouter  = require('./controllers/student.js')
const heroRouter = require('./controllers/hero.js')
const villainRouter = require('./controllers/villain.js')






app.use(express.urlencoded({extended: true}))


app.use(express.json())


app.use(methodOverride('_method'))


app.set('view engine', 'hbs')


app.use('/student', studentRouter)
app.use('/hero', heroRouter)
app.use('/villain', villainRouter)

const PORT = process.env.PORT || 3000


app.listen(PORT, ()=> {
    console.log(`App is listening on port ${PORT}`)
})