// loads .env file contents into process.env default

require('dotenv').config()

// import express 

const express = require('express')

const cors = require('cors')

const db = require('./db/connection')

const router = require('./Routes/router')

const appMiddleware = require('./Middlewares/appMiddleware')

// create a backend application using express

const pfServer = express() //create an express application

//use cors 

pfServer.use(cors())
pfServer.use(express.json())  //creates middleware that only parses json
pfServer.use(appMiddleware)
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads')) //Image exporting to frontend
//port creation
const PORT = 4000 || process.env.PORT

//server listening

pfServer.listen(PORT,()=>{
    console.log('Listening on the port' + PORT);
    
})

pfServer.get('/',(req,res)=>{
    res.send('<h1>Project Fair Server Started</h1>')
})