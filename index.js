const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
require('dotenv').config();

const mongoString = "mongodb+srv://exnope:PT9KWHQewVqBvQlg@cluster0.taxdq.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoString,function(err){
    if(err){
        console.log(err)
    }else{
        app.listen(3000, () => {
            console.log(`Server Started at ${3000}`)
        })
    }
});
const routes = require('./routes/routes');
app.use('/api', routes)


