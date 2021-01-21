const connectDB = require('./startup/db');
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
 
const fs = require('fs');
const path = require('path');
require('dotenv/config');
const imgModel = require('../models/profilepicture');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 

app.set("view engine", "ejs");

const multer = require('multer');
 
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
let upload = multer({ storage: storage });

app.get('/', (req, res) => {
    imgModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('imagesPage', { items: items });
        }
    });
});


 
app.post('/', upload.single('image'), (req, res, next) => {
 
    let obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/');
        }
    });
});

let port = process.env.PORT || '5000'
app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port', port)
})