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
    <div className="card flex items-center bg-slate-400 w-[300px] h-[375px] mx-4 my-4 pt-4">
        <h4 className="card-title text-center justify-center mx-2">{title}</h4>
        <img className='w-[150px] h-[150px] mt-5' src={img} alt="" />
        {/* <p className="card-body text-center">{img}</p> */}
        <p className="card-body text-center">{`$${price}`}</p>
        <div className="card-actions justify-center mb-20">
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