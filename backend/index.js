const stripe = require("stripe")(process.env.STRIPE_API_KEY)
const express = require("express")
const cors = require('cors');
const PORT = process.env.PORT || 8080

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
            success_url: `${process.env.NODE_ENV === 'production' ? 'https://hockey-ecommerce-store.onrender.com/?success=true' : 'http://localhost:5001/?success=true'}`,
            cancel_url: `${process.env.NODE_ENV === 'production' ? 'https://hockey-ecommerce-store.onrender.com/?canceled=true' : 'http://localhost:5001/?canceled=true'}`,
        })
        console.log(session.url)
        res.send(JSON.stringify({
            url: session.url
        }));
    } catch (error) {
        console.log(error)
    }

})

app.listen(PORT, () => console.log(`Running on port ${PORT}`));