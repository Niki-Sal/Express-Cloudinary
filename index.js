require('dotenv').config()

const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const multer = require('multer')
const cloudinary = require('cloudinary')
//upload for images, make a uploads folder, pass through the route as middleware
const uploads = multer({ dest: './uploads'})

const app = express()
app.set('view engine', 'ejs')

app.use(ejsLayouts)
app.use(express.urlencoded({extended: false})) // able to access req.body

app.get('/', function (req, res){
    res.send('welcome to my express Cloudinary App')
})

// app.get ('/images', (req, res)=>{
//     res.render('index')
// })

app.get('/images/new',(req, res)=>{
    res.render('new')
})

app.post('/images', uploads.single('inputFile'),(req,res)=>{
    //grab the uploaded file
    const image = req.file.path
    console.log(image)
    cloudinary.uploader.upload(image, (result) =>{
        //results that comes back from cloudinary
        console.log (result)
        res.render('index',{ image : result.url })
    })
})


//listen on PORT
const PORT = process.env.PORT || 8000
app.listen (PORT, () => { 
    console.log(`server is running on PORT: ${PORT}`)
})