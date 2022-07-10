const ColecionUsuario = require("../models/usuario")



class Controladores{
    async registrarUsuario(req,res){
        try {
            const newUsuario = req.body
            const validarCuenta = await ColecionUsuario.find({usuario})
            if(usuario){
                return res.status(400).json({
                    error:true,
                    msg:'El nombre de usuario ya existe, ingrese uno diferente '
                })
            }
            const nuevoUsuario = new ColecionUsuario(newUsuario)
            await nuevoUsuario.save()
            return res.status(200).json({
                exito:true,
                nuevoUsuario,
                msg: 'Se ha registrado el usuario'
                
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    async iniciarSesion(req,res){
        try {
            const {usuario, clave} = req.body
            const validarCuenta = await ColecionUsuario.find({usuario})
            if (!usuario){
                return res.status(400).json({
                    exito: false,
                    msg:"Cuenta no valida"
                })
            }
            if(clave !== validarCuenta.clave){
                return res.status(400).json({
                    exito: false,
                    msg:"Usuario o clave no valida"
                })
            }
            delete validarCuenta.clave
            return res.status(200).json({
                logeado:true,
                validarCuenta
                
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

const usuarioControladores = new Controladores()

module.exports = {usuarioControladores}