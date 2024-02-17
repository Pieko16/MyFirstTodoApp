const jwt = require("jsonwebtoken")

const auth = async(req,res,next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        let decodedData;
        if(token){
            decodedData = jwt.verify(token,process.env.Secret_token)
            req.userId = decodedData?.id

        }else{
            decodedData = jew.decode(token)
            req.userId = decodedData?.sub
        }
        next()

    }catch(err){
console.log(err)
    }
}

module.exports = auth