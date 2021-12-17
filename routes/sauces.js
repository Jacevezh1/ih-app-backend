// 1. IMPORTACIONES
const express 		= require("express")
const router		= express.Router()

const sauceController	= require("./../controllers/sauceController")

// 2. RUTEO (ROUTER)

// 1. Crear SALSA
router.post("/create", sauceController.create)


// 2. Leer SALSAS
router.get("/readall", sauceController.readAll)


// 3. Leer una SALSA 
router.get("/readone/:id", sauceController.readOne)


// 4. Actualizar una SALSA
router.put("/edit/:id", sauceController.edit)


// 5. Delete one SALSA
router.delete("/delete/:id", sauceController.delete)





// 3. EXPORTACIONES
module.exports = router