const express = require("express"); 
const { equipoControladores } = require("../controllers/equipo.controllers");
const route = express.Router()
const {validarRol} = require("../middlewares/validarRoll")

route.get("/listar-equipos", equipoControladores.listarEquipo); //no es necesario validar rol
route.get("/detalles-equipo/:id", equipoControladores.detallesEquipoId);//no es necesario validar rol
route.post("/agregar-equipo", validarRol(["Personal","Administrador"]), equipoControladores.agregarEquipo);
route.put("/actualizar-equipo/:id",validarRol(["Administrador"]), equipoControladores.actualizarEquipo );
route.delete("/eliminar-equipo/:id",validarRol(["Administrador"]), equipoControladores.borrarEquipo);

module.exports = route