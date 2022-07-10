const express = require("express");
const route = express.Router()
const {usuarioControladores} = require("../controllers/usuario.controllers")


route.post("/registrar-usuario", usuarioControladores.registrarUsuario);
route.post("/iniciar-sesion", usuarioControladores.iniciarSesion);

module.exports = route