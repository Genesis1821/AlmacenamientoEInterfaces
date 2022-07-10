const {Schema, model} = require("mongoose")

const usuario = new Schema({
    nombre: {
        type: String,
        trim: true,
    }, 
    apellido: {
        type: String,
        trim: true,
    }, 
    usuario: {
        type: String,
        trim: true,
    }, 
    clave: {
        type: String,
        trim: true,
    },
    rol: {
        type: String,
        
    }
   
    },  
    {
        timestamps: true,
        versionKey: false
    }
);


module.exports = model('Usuario', usuario);