const express = require('express')
const cors = require('cors')
const router = require('./routes')
const db = require('./db')
require('dotenv').config()


const app = express()

app.use(cors())
app.use(express.json())
app.use('/', router)



const start = async ()=>{
    try{
        await db(process.env.MONGO_URI)
        app.listen(9000, ()=>console.log('runnin'))
    }catch(err){
        console.log(err)
    }
}

start()