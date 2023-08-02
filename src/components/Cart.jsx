import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { getItemData } from '../itemList';
import CartCard from './CartCard';
import { Link } from 'react-router-dom';


const Cart = () => {
    const [checked, setChecked] = useState(false)
    const {items, getQuantity, removeAllItems, getTotalPrice} = useContext(CartContext)

    const checkOut = () => {
        setChecked(!checked)
        removeAllItems()
    }
    
    return (
        <div className="modal-section flex justify-end mr-4 pt-4">
            <button className="btn bg-white hover:bg-gray-400" onClick={()=>window.my_modal_3.showModal()}>
                <Icon path={mdiCart} size={1} color='black' />
            </button>
            {
                !checked && 
                <dialog id="my_modal_3" className="modal">
                    <form method="dialog" className=' modal-box w-full h-full' >
                        <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost border-white hover:btn-error text-white absolute right-4 top-4">✕</button>
                        <h4 className="font-bold text-5xl text-white">Cart</h4>
                        <h5 className="py-4 text-3xl text-white">My Items:</h5>
                        <div className={items.length > 0 ? `min-h-[100px]` : ''}>{items.length <= 0 ? (<h6 className='my-10 font-bold text-xl text-white'>Your cart is empty.</h6>) : (items.map(item => {
                            const cartItem = getItemData(item.id)
                            const itemQuantity = getQuantity(item.id)
                            return (
                                <div key={item.id}>
                                    <CartCard key={cartItem} item={cartItem} quantity={itemQuantity} />
                                </div>
                            )
                        }))}</div>
                        <h4 className='font-bold text-2xl text-right text-white'>Total: ${getTotalPrice()}</h4>
                        <div className="flex justify-end">
                            <button htmlFor="my_modal_3" className={`btn btn-md bg-blue-700 text-white mt-4 ${items.length === 0 && 'hidden'}`}>
                                <Link onClick={checkOut} to='/thankyou'>Checkout</Link>
                                {/* <a onClick={checkOut} href='/thankyou'>Checkout</a> */}
                            </button>
                        </div>
                    </form>
                </dialog> 
            
            }
        </div>
    )
}

export default Cart