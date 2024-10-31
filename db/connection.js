// node + mongodb connection


const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log("Mongodb connection established");
})
.catch(err=>{
    console.log("Mongodb connection error");
    
})
