'use strict';
const axios = require('axios');
const dataModel=require('../Modules/Data.Mudules')
const liveHandler=(req,res)=>{
    res.send('Am a live ....');
}
const getCurrencies=(req,res)=>{
    axios.get('https://crypto-explorer.herokuapp.com/crypto-list/').then(response=>res.send(response.data))
}
const seedData=()=>{
    let newUser=new dataModel({
        email:'renadsalem8888@gmail.com',
    currencies:[
        {
            title:"Ethereum",
            description: "Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. After Bitcoin, it is the largest cryptocurrency by market capitalization. Ethereum was invented in 2013 by programmer Vitalik Buterin.",
            toUSD:"3,288.49",
            image_url:"https://media.wired.com/photos/598a36a7f15ef46f2c68ebab/master/pass/iStock-696221484.jpg"
        }
    ]
    })
    let newUser2=new dataModel({
        email:'v.salvatore7.gs@gmail.com',
    currencies:[
        {
            title:"Ethereum",
            description: "Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. After Bitcoin, it is the largest cryptocurrency by market capitalization. Ethereum was invented in 2013 by programmer Vitalik Buterin.",
            toUSD:"3,288.49",
            image_url:"https://media.wired.com/photos/598a36a7f15ef46f2c68ebab/master/pass/iStock-696221484.jpg"
        }
    ]
    })

    newUser.save();
    newUser2.save();
}

const addToFav=(req,res)=>{
    let bodyData={
        title:req.body.title,
        description:req.body.description,
        image_url:req.body.image_url,
        toUSD:req.body.toUSD
    }
    dataModel.findOne({email:req.query.email},(err,data)=>{
        if(err){
            res.send(err)
        }else{
            data.currencies.push(bodyData)
            data.save();
            res.send('Added To favorite')
        }
    })
}
const getFav=(req,res)=>{
    dataModel.find({email:req.query.email},(err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
            
        }
    })
}
const deleteCurrency=(req,res)=>{
    dataModel.findOne({email:req.query.email},(err,data)=>{
        if(err){
            res.send(err)
        }else{
            data.currencies.splice(+req.params.id,1)
            data.save();
            res.send('Deleted successfully')
        }
    })
}

const updateCurrency=(req,res)=>{
    let bodyData={
        title:req.body.title,
        description:req.body.description,
        image_url:req.body.image_url,
        toUSD:req.body.toUSD
    }
    dataModel.findOne({email:req.query.email},(err,data)=>{
        if(err){
            res.send(err)
        }else{
            data.currencies.splice(+req.params.id,1,bodyData)
            data.save();
            res.send('Updated successfully')
        }
    })
}
module.exports={
    liveHandler,
    getCurrencies,
    seedData,
    getFav,
    addToFav,
    deleteCurrency,
    updateCurrency
}