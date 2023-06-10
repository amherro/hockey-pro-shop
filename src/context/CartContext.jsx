import { createContext, useState } from "react";
// import { Items, getItemData } from "../itemList";
import PropTypes from 'prop-types';

export const CartContext = createContext({
    items: [],
    getQuantity: () => {},
    getItem: () => {},
    addItem: () => {},
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

    const contextValue = {
        items,
        getQuantity,
        addItem
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