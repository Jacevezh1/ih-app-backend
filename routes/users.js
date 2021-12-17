// 1. IMPORTACIONES
const express	= require("express")
const router	= express.Router()	

const userController	= require("./../controllers/userController")
const authorization 	= require("./../middlewares/authorization")



// 2. ROUTER

// Crear un usuario
router.post("/create", userController.create)

// Iniciar Sesion
router.post("/login", userController.login)

// Verificacion de usuario
router.get("/verifytoken", authorization, userController.verifyToken)



// 3. EXPORTACIÓN
module.exports = router