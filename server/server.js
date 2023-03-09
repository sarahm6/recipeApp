const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const Recipe = require('./models');

const app = express();

// parse req.body for use
app.use(express.json());

// parse queries from url
app.use(express.urlencoded({extended: true}))

// console.log(process.env.API_KEY);
app.use(cors('*/*'))

// app.use(logger('dev'))

const connectionString = `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@mongosetupcluster.uxrtp52.mongodb.net/Mod3?retryWrites=true&w=majority`

mongoose.set('strictQuery', false);
// connect to our MongoDB database (our Models specify which collections)
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
// function will activate once to let us know we are connected
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// ROUTES 
app.get('/recipes/:id', async (req, res) => {
    let id = req.params.id;

    let response = await Recipe.findById(id);
    console.log(response)
    res.send(response);
});

//Retrieve all recipes
app.get('/recipes', async (req, res) => {

    let response = await Recipe.find({})
    console.log(response)
    res.send(response);
});

// Create recipe- uses information from req.body to make a new product in your collection
app.post('/recipes', async (req, res) =>{
    // const {name, content, imageURL} = req.body;
    // Model methods usually give us a promise, so we can wait for the response
    let returnedValue = await Recipe.create(req.body);
    console.log(returnedValue);
    if (returnedValue) {
        console.log("upload complete");
    }
    res.send(returnedValue);

})

// Delete product- The product ID should be included in the URL as a query
app.delete("/recipes/:id", async (req, res) => {
    let {id} = req.params
    let response = await Recipe.findByIdAndDelete(id);
 
    console.log(response);
 
    res.send({data: `deleted ${response.deletedCount} items.`})
 })

 // Update product- uses information from req.body to update the specific product
 app.put('/recipes/:id', async (req, res) => {
    let id = req.params.id;
    // console.log(req.body)
    let myData = {...req.body}
    console.log(myData)
    try {
    let response = await Recipe.findByIdAndUpdate(id, myData, {new:true});
        console.log(response);
        res.send(response);
    } catch (error) {
        console.log("error", error)
        res.send(error)
    }  
})


app.listen(5000, () => {
    console.log(`Server is Listening on 5000`);
})