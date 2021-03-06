// ./server/models/Guitar.js

// 1. IMPORTACIONES
const mongoose = require("mongoose")

// 2. SCHEMA
const salsaSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	content: {
		type: String,
		default: true
	},
	image: {
		type: String,
		required: true
	},
	description: {
		type: String,
		default: true
	},
	ml: {
		type: Number,
		default: true
	}
})


// 3. MODELO
const Salsa = mongoose.model("Salsa", salsaSchema)

// 4. EXPORTACIÓN
module.exports = Salsa