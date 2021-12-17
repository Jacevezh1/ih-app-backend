const Sauce = require("./../models/Sauce")


// 1. Obtenemos datos del formulario, creamos variables, y le asignamos sus valores.

exports.create = async (req, res) => {

		const { 
			name,
			price,
			content,
			image,
			description,
            ml
		 } = req.body

	//Crear una nueva salsa en mi DB
	try {
		const newSauce = await Sauce.create({
			name,
			price,
			content,
			image,
			description,
            ml
		})

		// Devolver respuesta en JSON (Siempre)
		res.json({
			msg: "Sauce creada con éxito",
			data: newSauce		
		})

	} catch (error) {
		
		res.status(500).json({
			msg: "Hubo un error creando la Salsa",
			error: error
		})

       

	} 


}

// 2. Read all Sauces Controller

exports.readAll = async (req, res) => {

	try {
		
		const sauces = await Sauce.find({})

		res.json({
			msg: "Sauces obtenidas con éxito.",
			data: sauces
		})


	} catch (error) {
		
		res.status(500).json({
	 		msg: "Hubo un error obteniendo los datos",
			error: error
		})

	}

}

// 3. Read one Sauce Controller

exports.readOne = async (req, res) => {

	const { id } = req.params

	try {
		
		const sauce = await Sauce.findById(id)

		res.json({
			msg: "One Sauce obtenida con éxito.",
			data: sauce
		})

	} catch (error) {
		res.status(500).json({
			msg: "hubo un error obteniendo los datos.",
			error: error
		})

        
	}


}


// 4. Edit one Sauce

exports.edit = async (req, res) => {
	
	const { id } = req.params

	const { 
		name,
		price,
		content,
		image,
        description,
        ml
	} = req.body


	try {
		const updatedSauce = await Sauce.findByIdAndUpdate(
			id, // Id de la salsa
			{
				name,
                price,
                content,
                image,
                description,
                ml 
                // Propiedades del modelo a cambiar sobre la salsa
			}, 
			{new: true}
		)

		res.json({
			msg: "Sauce actualizada con éxito.",
			data: updatedSauce
		})

		
	} catch (error) {
		
		res.status(500).json({
			msg: "Hubo un error con la actualización de la Sauce.",
			error: error
		})

	}

}


// 5. Delete one sauce

exports.delete = async (req, res) => {

	const { id } = req.params

	try {
		
		const deletedSauce = await Sauce.findByIdAndRemove({_id: id})

		res.json({
			msg: "Sauce borrada con éxito.",
			data: deletedSauce
		})

	} catch (error) {
		res.status(500).json({
			msg: "Hubo un error borrando la Sauce.",
			error: error
		})
	}

}