import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemCard = ({ id, title, desc, price, img }) => {
  const {addItem} = useContext(CartContext)

  const addToCart = () => {
    addItem(id)
    // console.log(items)
  }

  return (
    <div className="card bg-slate-400">
        <h4 className="card-title">{title}</h4>
        <img src={img} alt="" />
        <p className="card-body">{desc}</p>
        <p className="card-body">{price}</p>
        <div className="card-actions">
            <button className="btn btn-primary">View</button>
            <button className="btn btn-primary" onClick={addToCart}>Add</button>
        </div>
    </div>
  )
}

ItemCard.propTypes = {
    id: PropTypes.number,
    item: PropTypes.any,
    title: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
}

export default ItemCard