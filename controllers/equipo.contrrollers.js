const ColeccionEquipo = require("../models/equipo")
 

 class Controladores{

    async listarEquipo(req, res){
        try {
            const equiposRegistrados = await ColeccionEquipo.find({})
            return res.status(200).json({
                exito:true,
                data: equiposRegistrados
            })
           }
           catch (error){
            console.log(error.message)
           }     
    }

    async detallesEquipoId(req, res){
        const idEquipo = req.params.id //serial del equipo solicitado

        if(!idEquipo) return res.status(401).json({
            exito: false,
            data: null,
            msg:"id invalido"
        }) 

        const detallesEquipo =  await ColeccionEquipo.findById({_id : idEquipo})
        if (detallesEquipo){
            res.status(200).json({
                exito:true,
                data: detallesEquipo
        })
        }
        else{
            res.status(400).json({
                exito: false,
                data: null,
                msg:"equipo no encontrado"
        })
        }
    }


    async agregarEquipo(req, res){
        try {
            const equipoNuevo = req.body
            const nuevoRegistro = new ColeccionEquipo(equipoNuevo)
            await nuevoRegistro.save()
            return res.status(200).json({
                exito:true,
                nuevoRegistro
            })
       } catch (error) {
            console.log(error.message)
       }
    }


    async borrarEquipo(req,res){
        const idEquipo = req.params.id //serial del equipo solicitado
        if(!idEquipo) return res.status(401).json({
            exito: false,
            data: null,
            msg:"id invalido"
        }) 
        await ColeccionEquipo.findByIdAndDelete({_id : idEquipo})
        return res.status(200).json({
            exito: true,
            msg: 'El equipo fue eliminado'
        })
    }


    async actualizarEquipo(req,res){
        const idEquipo = req.params.id //serial del equipo solicitad
        const newData = req.body
    
        if(!idEquipo) return res.status(401).json({
            exito: false,
            data: null,
            msg:"id invalido"
        }) 
    
        await ColeccionEquipo.findByIdAndUpdate({_id : idEquipo}, newData)
        return res.status(200).json({
            exito:true,
            msg: 'El registro se ha actualizado'
        })
    }

 }



const equipoControladores = new Controladores()



module.exports = {equipoControladores}
