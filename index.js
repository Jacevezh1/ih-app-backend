// ./server/index.js

// 1. IMPORTACIONES
const express 		= require("express")
const app			= express()

const cors			= require("cors")

require("dotenv").config()

const connectDB = require('./config/db')


// 2. MIDDLEWARES
// BASE DE DATOS
connectDB()

// HABILITAR CORS (ACCESOS DE AMBIENTES DE DESARROLLO DE TERCEROS)
app.use(cors())

// TODAS LAS PETICIONES Y RESPUESTAS SE MANEJAN
// EN PROTOLOCO JSON
app.use(express.json())

// 3. RUTAS
app.use("/sauces", require("./routes/sauces"))
app.use("/users", require("./routes/users"))


app.use("/api/checkout", require("./routes/checkout"))
app.use("/api/sauces", require("./routes/sauces"))



// 4. SERVER
app.listen(process.env.PORT, () => {

	console.log(`Servidor trabajando en ${process.env.PORT}`)

})