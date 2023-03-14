const express = require('express')
const path = require('path')
require('dotenv').config()
const app = express()

const pathPublic = path.resolve(__dirname, 'public')
app.use(express.static(pathPublic))
app.listen( process.env.PORT, 
    (err)=> {
        if(err){
            throw new Error(err)
        }
        console.log('Servidor corriendo en', process.env.PORT)
        console.log("test 02")
    }
)