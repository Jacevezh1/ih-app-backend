const stripe = require('stripe')(process.env.STRIPE_SK);


exports.createCheckoutSession = async (req, res) => {

	/* const { cart } = req.body */

	// CREAR UNA SESIÓN DE CHECKOUT DE STRIPE
	const session = await stripe.checkout.sessions.create({
		// CARRITO DE COMPRAS
		line_items: [{
            price: "price_1K9gRIGdZX4EQNg9CccNDQFR",
            quantity: 1
        }],
		mode: "payment",
		success_url: "http://localhost:3000/?success=true",
		cancel_url: "http://localhost:3000/?canceled=true",
	})

	res.json({
        session: session
    })
}
