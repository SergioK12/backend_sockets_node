const { io }= require('../index.js');
const Band = require('../models/band.js');
const Bands = require('../models/bands.js');

const bands = new Bands();

bands.addband( new Band( 'Sk12' ));
bands.addband( new Band( 'Sk13' ));
bands.addband( new Band( 'Sk14' ));
bands.addband( new Band( 'Sk15' ));

console.log('Init server');

io.on('connection', client => {
    console.log("cliente conectado");
    client.emit('active-bands', bands.getbands());

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
        //console.log("Flutter dice:",payload);
    });

    client.on('emitir-flutter', (payload) => {
        client.broadcast.emit('emitir-flutter', payload)
        console.log(payload);
    });

    client.on('retrasnmitir', (payload) => {
        console.log(payload);
    });

    client.on('vote-band', (payload) => {
        bands.voteband(payload.id);

        client.emit('active-bands', bands.getbands());
    });

    client.on('add-band', (payload) => {
        const newBand = new Band( payload.name );
        bands.addband( newBand );
        io.emit('active-bands', bands.getbands() );
    });

});