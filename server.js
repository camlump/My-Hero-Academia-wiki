const express = require('express')
const app = express()
const methodOverride = require('method-override')


const homeRouter  = require('./controllers/home.js')




app.use(express.urlencoded({extended: true}))


app.use(express.json())


app.use(methodOverride('_method'))


app.set('view engine', 'hbs')


app.use('/home', homeRouter)


const PORT = process.env.PORT || 3000


app.listen(PORT, ()=> {
    console.log(`App is listening on port ${PORT}`)
})