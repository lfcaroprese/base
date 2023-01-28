const fs = require('fs');
const color = require('colors');

const crearArchivo = async (base, listar, limite) => {
    console.log(limite);
    try{
        let salida = '';
        let nombreArchivo = `tabla-${base}.txt`

        salida += `${'====================================='.blue}\n`;
        salida +=`             Tabla del ${color.green(base)}\n`;
        salida += `${'====================================='.blue}\n`;

        for(let i=1; i<=limite;i++) {
            salida += `${base} ${'x'.green} ${i} ${'='.green} ${base*i} \n`;
        }
        if(listar) console.log(salida);
        
        fs.writeFileSync(`./salida/${nombreArchivo}`, salida)
        return nombreArchivo;
    }catch(err){
        throw err;
    }
};

module.exports = {
    crearArchivo
}