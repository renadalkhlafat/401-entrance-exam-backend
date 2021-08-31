'use strict';
const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose');
require('dotenv').config();
const app= express();
app.use(cors());
app.use(express.json());
const PORT=process.env.PORT;
mongoose.connect(`${process.env.ATLAS}`)
const {
    liveHandler,
    getCurrencies,
    seedData,
    getFav,
    addToFav,
    deleteCurrency,
    updateCurrency
}=require('./controllers/coin.controllers')

app.get('/',liveHandler);
// seedData();
app.get('/get-currencies',getCurrencies)
app.post('/add-fav',addToFav)
app.get('/get-fav',getFav)
app.delete('/delete/:id',deleteCurrency)
app.put('/update/:id',updateCurrency)
app.listen(PORT,()=>console.log(`Listening in port ${PORT}`))