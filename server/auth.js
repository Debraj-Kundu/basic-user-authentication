const jwt = require('jsonwebtoken')
const User = require('./model')

const protect = async (req, res, next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        console.log(req.headers)
        try {
            token = req.headers.authorization.split(" ")[1]
      
            //decodes token id
            const decoded = jwt.verify(token, process.env.SECRET)
      
            req.user = await User.findById(decoded.id).select("-password")
      
            next()
          } catch (error) {
            return res.status(401)
          }
    }
}

module.exports = protect