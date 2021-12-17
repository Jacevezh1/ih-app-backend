const bcryptjs  = require("bcryptjs")
const jwt		= require("jsonwebtoken")
const User		= require("./../models/User")


// 1. Crear un usuario

exports.create = async (req, res) => {

	// Obtener datos del formulario del usuario (Req)
	const { 
		name,
		lastname,
		country,
		adress,
		email,
		password, 
        admin
	 } = req.body

    
	// Realizar proceso asincrono
	try {
		
		// 3. Generar un password en DB
		const salt	= await bcryptjs.genSalt(10)
		const hashedPassword = await bcryptjs.hash(password, salt)

        // 4. Crear un usuario en DB
		const newUser = await User.create({
			name,
            lastname,
            country,
            adress,
            email,
            password, 
            admin,
			password: hashedPassword
		})


        // 5. Autentifacion con tokens

		// A. Crear un payload (Informcion del usuario)
        const payload = {
			user: {
				id: newUser._id // Id de mongo del Usuario
			}
		}


		// B. Firmar el Token
		jwt.sign(
			payload, // Datos que lleva el token (Info del usuario)
			process.env.SECRET, // Palabra Secreta (FIRMA)
			{
				expiresIn: 360000 // Expiracion del token
			},
			(error, token) => {
				if(error) throw error

				res.json({
					msg: "Token correctamente generado.",
					data: token
				})
			}
		)


        

	} catch (error) {
        
	// En caso de error en el proceso asincrono
		res.status(500).json({
			msg: "Hubo un error con la creación de usuario.",
			error: error
		})

	}
}


