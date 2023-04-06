const { io }= require('../index.js')
io.on('connection', client => {
    console.log("cliente conectado")

    client.on('disconnect', () => {
        console.log("cliente desconectado")
    });

    client.on('mensaje', (carga) => {
        console.log('Mensaje: ',carga)  
        io.emit('m2', { nombre: "Sergio" })
    });

    client.on('emitir-mensaje', (carga) => {

        io.emit('Nuevo-Mensaje', "HEY!!!!")
    });
    //test de retrasnmision
    client.on('test', (carga)=> {
        io.emit("test", carga)

    client.on('emitir-mensaje', (payload) => {
        io.emit('nuevo-mensaje', payload);
    })

});