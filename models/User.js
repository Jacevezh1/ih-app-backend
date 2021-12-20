// 1. IMPORTACIONES
const mongoose = require("mongoose")


// 2. SCHEMAS
const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		default: ""
	},
	country: {
		type: String,
		default: ""
	},
	adress: {
		type: String,
		default: ""
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
    admin: {
		type: Boolean,
		default: false
	}
})



// 3. MODELOS
const User = mongoose.model("User", userSchema)



// 4. EXPORTACIÓN
module.exports = User
