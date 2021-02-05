require('dotenv').config()

const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const multer = require('multer')
const cloudinary = require('cloudinary')

const app = express()
app.set ('view engine', 'ejs')

app.use(ejsLayouts)
app.use(express.urlencoded({extended: false})) // able to access req.body

app.get('/', function (req, res){
    res.send('welcome to my express Cloudinary App')
})

//listen on PORT
const PORT = process.env.PORT || 8000
app.listen (PORT, () => { 
    console.log(`server is running on PORT: ${PORT}`)
})