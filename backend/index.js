const stripe = require("stripe")(process.env.STRIPE_API_KEY)
const express = require("express")
const cors = require('cors');

const app = express()
app.use(cors())
app.use(express.static('public'))
app.use(express.json())

app.post('/checkout', async (req, res) => {
    try {
        const itemsInCart = req.body.items
        
        console.log(itemsInCart)
        
        let lineItems = []
    
        itemsInCart.forEach(item => {
            lineItems.push({price: item.id, quantity: item.quantity})
        })
        
        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:5001/thankyou?success=true',
            cancel_url: `http://localhost:5001/?canceled=true`,
        })
        console.log(session.url)
        res.send(JSON.stringify({
            url: session.url
        }));
    } catch (error) {
        console.log(error)
    }

})

app.listen(8080, () => console.log('Running on port 8080'));