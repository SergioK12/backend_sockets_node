const express = require('express')
const path = require('path')
require('dotenv').config()
//Express App
const app = express()

//Node Server
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//Mensajes de sockets
io.on('connection', client => {
        console.log("cliente conectado")
   
    client.on('disconnect', () => {

        console.log("cliente desconectado")

    });

    client.on('Mensaje', (carga) => {

        io.emit('m2', { nombre : "Sergio"})
    });
    
    

});

const pathPublic = path.resolve(__dirname, 'public')
app.use(express.static(pathPublic))
server.listen( process.env.PORT, 
    (err)=> {
        if(err){
            throw new Error(err)
        }
        console.log('Servidor corriendo en', process.env.PORT)
    }
)