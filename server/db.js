const mongoose = require('mongoose')



const conn = (uri)=>{
    mongoose.connect(uri)
}

module.exports = conn