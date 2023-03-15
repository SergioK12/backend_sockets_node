const { io }= require('../index.js')
io.on('connection', client => {
    console.log("cliente conectado")

    client.on('disconnect', () => {

        console.log("cliente desconectado")

    });

    client.on('Mensaje', (carga) => {

        io.emit('m2', { nombre: "Sergio" })
    });

});