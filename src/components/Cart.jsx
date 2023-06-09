import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';
import { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { getItemData } from '../itemList';
import CartCard from './CartCard';

const Cart = () => {
    const {items, getQuantity} = useContext(CartContext)
    useEffect(() => {
        console.log(items)
      }, [items])
  return (
        <div className="modal-section flex justify-end mr-4 pt-4">
            <button className="btn bg-white" onClick={()=>window.my_modal_3.showModal()}>
                <Icon path={mdiCart} size={1} color='black' />
            </button>
            <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box w-full h-full">
                <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h4 className="font-bold text-5xl">Cart</h4>
                <h5 className="py-4 text-3xl">My Items:</h5>
                <div>{items.map(item => {
                    const cartItem = getItemData(item.id)
                    const itemQuantity = getQuantity(item.id)
                    return (
                        <div key={item.id}>
                            <CartCard key={cartItem} item={cartItem} quantity={itemQuantity} />
                        </div>
                    )
                })}</div>
            </form>
            </dialog> 
        </div>
    )
}

export default Cart