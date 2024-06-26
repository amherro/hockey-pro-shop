const stripe = require("stripe")(process.env.STRIPE_API_KEY)
const express = require("express")

const app = express()

app.use(express.static('public'))

const frontend = 'https://hockey-ecommerce-store.onrender.com/'

app.post('/checkout', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: 'price_1PVL9hIvAmQ0UuMIC6eXokEr',
                quantity: 1,
            },
            {
                price: 'price_1PVL9HIvAmQ0UuMIbFHNRSft',
                quantity: 1,
            },
            {
                price: 'price_1PVL8kIvAmQ0UuMIl62RANQh',
                quantity: 1,
            },
            {
                price: 'price_1PVL7hIvAmQ0UuMIcboDWym6',
                quantity: 1,
            },
            {
                price: 'price_1PVL77IvAmQ0UuMISfdJE5bU',
                quantity: 1,
            },
            {
                price: 'price_1PVL64IvAmQ0UuMI3HnTdncT',
                quantity: 1,
            },
            {
                price: 'price_1PVL5SIvAmQ0UuMI1XiJEBbA',
                quantity: 1,
            },
            {
                price: 'price_1PVL4XIvAmQ0UuMIIgmiKGn5',
                quantity: 1,
            },
            {
                price: 'price_1PVL3sIvAmQ0UuMIsoHKizsg',
                quantity: 1,
            },
            {
                price: 'price_1PVL36IvAmQ0UuMIVOIXbgUZ',
                quantity: 1,
            },
            {
                price: 'price_1PVL2JIvAmQ0UuMIbQLtcfLY',
                quantity: 1,
            },
            {
                price: 'price_1PVL1LIvAmQ0UuMI9aVLrlgN',
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${frontend}/thankyou?success=true`,
        cancel_url: `${frontend}?canceled=true`,
    })
    res.redirect(303, session.url);
})

app.listen(4242, () => console.log('Running on port 4242'));
