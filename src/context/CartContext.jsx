import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { getItemData } from "../itemList";

export const CartContext = createContext({
    items: [],
    getQuantity: () => {},
    getItem: () => {},
    addItem: () => {},
    decreaseItemCount: () => {},
    removeItem: () => {},
    removeAllItems: () => {},
    updateItem: () => {},
    deleteItem: () => {},
    getTotalPrice: () => {},
})

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([])

    const getQuantity = (id) => {
        const quantity = items.find(item => item.id === id)?.quantity

        if(quantity === undefined ) {
            return 0
        }

        return quantity
    }

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    const removeAllItems = () => {
        setItems([])
    }

    const addItem = (id) => {
        const quantity = getQuantity(id);
        if(quantity === 0) {
            setItems([...items, {id, quantity: 1}])
        } else {
            setItems(items.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item))
        }
    }

    const decreaseItemCount = (id) => {
        let itemQuantity = getQuantity(id)

        if(itemQuantity == 1) {
            removeItem(id)
        } else {
            setItems(items.map(item => item.id === id ? {...item, quantity: item.quantity - 1} : item))
        }
    }

    const getTotalPrice = () => {
        let prices = []
        items.map(item => {
            const data = getItemData(item.id)
            let itemPrice = data.price * item.quantity
            prices = [...prices, itemPrice]
            // console.log(prices)
            return prices
        })
        const total =  prices.reduce((sum, current) => {
            return sum + current
        }, 0)
        return (Math.round(total * 100) / 100)
    }

    const contextValue = {
        items,
        getQuantity,
        removeItem,
        removeAllItems,
        addItem,
        decreaseItemCount,
        getTotalPrice
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.any
}