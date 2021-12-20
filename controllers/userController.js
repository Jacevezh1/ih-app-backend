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

// 2. Iniciar Sesion 
// Autenticar que la persona que pase su email y contraseña coincidan, y se le asigna un token
exports.login = async (req, res) => {

	
    // 1. Obtener el email y el password del formulario (JSON)
	const { email, password } = req.body

	try {
		
        // 2. Encontart un usuario en DB
		const foundUser = await User.findOne({ email })

		// 3. Validacion... Si no hay usuario...
		if(!foundUser) {
			return res.status(400).json({
				msg: "El usuario o la contraseña son incorrectos."
			})
		}

        // 4. Si todo coincide, el usuario fue encontrado, entonces ahora evalua contraseña.
		const verifiedPass = await bcryptjs.compare(password, foundUser.password)

		
        // 5. Validacion - Si el password no coincide
		if(!verifiedPass) {
			return await res.status(400).json({
				msg: "El usuario o la contraseña no coinciden."
			})
		}

		
        // 6. Si TODO coincide y es correcto, generamos un Json Web Token

        // 6a. Establecer un payload (Datos del usuario)
		const payload = {
			user: {
				id: foundUser.id
			}
		}

		
        // 6b. Firma del Json Web Token
		jwt.sign(
			payload,
			process.env.SECRET,
			{
				expiresIn: 360000
			},
			(error, token) => {
				if(error) throw error

				res.json({
					msg: "Inicio de sesión exitoso.",
					data: token
				})
			}
		)
		
		return


	} catch (error) {
		console.log(error)
		res.status(500).json({
			msg: "Hubo un problema con la autenticación.",
			data: error
		})
	}
}

// 3. Verificar usuario
// CUANDO ESTAMOS ACCEDIENDO A DIFERENTES RUTAS (SAUCES) PREGUNTAR SI EL USUARIO TIENE PERMISOS O NO. ENTONCES, PARA CONFIRMARLO, SE LE PIDE SU TOKEN.
// Una ruta que pide tokens para verificar
exports.verifyToken = async (req, res) => {


	try {
		
		// 1. BUSCAR EL ID DEL USUARIO (DEL TOKEN ABIERTO) EN BASE DE DATOS

		const foundUser = await User.findById(req.user.id).select("-password")

		return res.json({
			msg: "Datos de usuario encontrados.",
			data: foundUser
		})


	} catch (error) {
			console.log(error)

			res.status(500).json({
				msg: "Hubo un error con el usuario"
			})
	}

}


// 4. Editar Usuario
exports.editUser = async (req, res) => {
	
	const { id } = req.params

	const { 
		name,
		lastname,
		country,
		adress,
        email,
	} = req.body


	try {
		const updatedUser = await User.findByIdAndUpdate(
			id, // Id de la salsa
			{
				name,
				lastname,
				country,
				adress,
				email,
                // Propiedades del modelo a cambiar sobre la salsa
			}, 
			{new: true}
		)

		res.json({
			msg: "User actualizada con éxito.",
			data: updatedUser
		})

		
	} catch (error) {
		
		res.status(500).json({
			msg: "Hubo un error con la actualización de la User.",
			error: error
		})

	}

}


// 5. Delete Usuario
exports.deleteUser = async (req, res) => {

	const { id } = req.params

	try {
		
		const deletedUser = await User.findByIdAndRemove({_id: id})

		res.json({
			msg: "User borrada con éxito.",
			data: deletedUser
		})

	} catch (error) {
		res.status(500).json({
			msg: "Hubo un error borrando el User.",
			error: error
		})
	}

}







