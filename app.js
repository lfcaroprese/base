const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');
               
console.clear();
console.log(argv);
crearArchivo(argv.base, argv.listar, argv.limite)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));


