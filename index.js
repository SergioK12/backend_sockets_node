const express = require('express')
const path = require('path')
const app = express()

const pathPublic = path.resolve(__dirname, 'public')
app.use(express.static(pathPublic))
app.listen( '3000', 
    (err)=> {
        if(err){
            throw new Error(err)
        }
        console.log('Servidor corriendo en', 3000)
    }
)