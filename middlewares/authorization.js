

const jwt = require("jsonwebtoken")

const decrypt = async (req, res, next) => {

	
    // Capturar el token y guardarlo en una variable
	const token = req.header("x-auth-token")

	// Si no hay token...
	if(! token){
		return res.status(401).json({
			msg: "No hay token, permiso no válido."
		})
	}

	// Si hay token...
	try {
		
		const openToken = await jwt.verify(token, process.env.SECRET)

		req.user = openToken.user

		next()



	} catch (error) {
		res.json(
			{
				msg: "Hubo un error con el token."
			}
		)

	}
}





module.exports = decrypt
