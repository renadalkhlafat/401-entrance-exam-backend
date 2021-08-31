'use strict';
const mongoose=require('mongoose');

const dataSchema= new mongoose.Schema({
    email:{type:String},
    currencies:[
        {
            title:{type:String},
            description:{type:String},
            toUSD:{type:String},
            image_url:{type:String}
        }
    ]
})

const dataModel=mongoose.model('currency',dataSchema);

module.exports=dataModel