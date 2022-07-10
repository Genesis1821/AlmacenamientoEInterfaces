const {Schema, model} = require("mongoose")

const equipo = new Schema({
    nombre: {
        type: String,
        trim: true,
    }, 
    descripcion: {
        type: String,
        trim: true,
    }, 
    serial: {
        type: String,
        trim: true,
    }, 
    fecha_inicial_puesta_marcha: {
        type: String,
        trim: true,
    },
    ultima_fecha_puesta_marcha: {
        type: String,
        
    },
    ultima_fecha_mantenimiento: {
        type: String
    },
    id_ultimo_trabajo_mantenimiento: {
        type: Schema.Types.ObjectId, ref: 'mantenimientoRegistro'
    }
    },  
    {
        timestamps: true,
        versionKey: false
    }
);


module.exports = model('Equipo', equipo);