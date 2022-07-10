const {Schema, model} = require("mongoose")

const mantenimientoRegistro = new Schema({
    id_mantenimiento: {
        type: String,
        trim: true,
    }, 
    id_equipo: {
        type: Schema.Types.ObjectId, ref: 'Equipo'
        
    }, 
    fecha_planificada_mantenimiento: {
        type: Number,
        trim: true,
    }, 
    fecha_inicio_mantenimiento: {
        type: String,
        trim: true,
    },
    fecha_final_mantenimiento: {
        type: String,
        
    },
    estatus_mantenimiento: {
        type: String
    },
    tipoMantenimiento: {
        type: String
    }
    },  
    {
        timestamps: true,
        versionKey: false
    }
);


module.exports = model('mantenimientoRegistro', mantenimientoRegistro);