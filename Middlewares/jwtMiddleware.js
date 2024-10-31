// router-level-middleware

const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    console.log("Inside jwt middleware - Router-level-middleware");

// get the token from user request
const token = req.headers['authorization']?.slice(7)
console.log(token);


    try{
            // token verification

const tokenVerification = jwt.verify(token,'superkey2024')
console.log(tokenVerification);
req.payload = tokenVerification.userId
console.log('multer');

        next()
        console.log('after multer');
        
    }
    catch(err){
res.status(401).json("Authorization failed ...Please login again")
    }


}

module.exports = jwtMiddleware