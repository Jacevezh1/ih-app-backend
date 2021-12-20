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

// 4. Actualizar una User
router.put("/edit/:id", userController.editUser)

// 5. Borrar un perfil
router.delete("/delete/:id", userController.deleteUser)

// Verificacion de usuario
router.get("/verifytoken", authorization, userController.verifyToken)





// 3. EXPORTACIÓN
module.exports = router