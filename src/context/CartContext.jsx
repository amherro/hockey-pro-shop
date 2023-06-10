import { createContext, useState } from "react";
// import { Items, getItemData } from "../itemList";
import PropTypes from 'prop-types';

export const CartContext = createContext({
    items: [],
    getQuantity: () => {},
    getItem: () => {},
    addItem: () => {},
    decreaseItemCount: () => {},
    removeItem: () => {},
    updateItem: () => {},
    deleteItem: () => {},
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
        const filteredItems = items.filter(item => item.id !== id)
        return filteredItems
    }

    const addItem = (id) => {
        // const data = getItemData(id)
        const quantity = getQuantity(id);
        if(quantity === 0) {
            setItems([...items, {id, quantity: 1}])
        } else {
            setItems(items.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item))
        }
        // console.log(items)
    }

    const decreaseItemCount = (id) => {
        const cartLength = getQuantity(id)

        if(cartLength <= 0) {
            removeItem(id)
        } else {
            setItems(items.map(item => item.id === id ? {...item, quantity: item.quantity - 1} : item))
        }
    }

    const contextValue = {
        items,
        getQuantity,
        removeItem,
        addItem,
        decreaseItemCount
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