import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartCard = ({ item, quantity }) => {
    const {addItem} = useContext(CartContext)
    const {title, description, price, img} = item
  return (
    <div className="card">
        {/* <img src={img} alt="" /> */}
        <div className="flex">
            <div className="card-title">{title}</div>
            <div className="card-body p-0 items-end">{`$${price}`}</div>
        </div>
        <div className="flex">
            <p className="card-body p-0 pt-2 text-white">{description}</p>
            <div className="card-actions p-0 pt-2 flex items-end">
                <button className="btn btn-primary" onClick={(e) => {
                    e.preventDefault()
                    addItem(item.id)
                }}>+</button>
               <h1 className='align-center'>{quantity}</h1>
                <button className="btn btn-primary" onClick={console.log('first')}>-</button>
            </div>
        </div>
    </div>
    
  )
}

CartCard.propTypes = {
    id: PropTypes.number,
    quantity: PropTypes.number,
    item: PropTypes.any,
    title: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
}

export default CartCard