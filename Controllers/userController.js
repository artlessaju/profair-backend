// define logic functions

//register logic function

const users = require('../Models/userSchema')

const jwt = require('jsonwebtoken')

exports.register=async(req,res)=>{
    console.log('inside regsiter function');

try{

const {username,email,password} = req.body

console.log(`${username} ${email} ${password}`);


const existingUser = await users.findOne({email})

if(existingUser){
    res.status(402).json("User already exists")
}
else{

const newUser = new users({

    username,email,password,github:"",link:"",profile:""
})
await newUser.save()//data saved in mongodb
res.status(200).json("User created successfully")



}

}
catch(err){

    res.status(500).json("Server Error")

}

    // res.status(200).json("Register request recieved")

}

//login

exports.login = async(req,res)=>{

try{

const {email,password} = req.body

const user = await users.findOne({email,password})

if(user){
    const token = jwt.sign({userId:user._id},"superkey2024")
    console.log(token);
    res.status(200).json({user,token}) //login successful
}
else{
    res.status(401).json("Invalid User")
}

}
catch(err){

    res.status(500).json("Server error" + err.message)
}


}