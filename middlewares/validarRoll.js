

const validarRol = (rolesRutaPermitido) => (req, res, next) => {
    const rolCuenta = req.body.rol
    if(!rolesRutaPermitido.includes(rolCuenta)){
        return res.status(400).json({
            acceso: falso,
            msg: 'Acceso denegado, rol no autorizado',
            operacion:'Fallida'
        })
    }
    next()

}

module.exports = {validarRol}