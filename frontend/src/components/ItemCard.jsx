import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemCard = ({ id, title, price, img }) => {
  const {addItem} = useContext(CartContext)

  const addToCart = () => {
    addItem(id)
    // console.log(items)
  }

  return (
    <div className="card flex items-center bg-neutral-400 w-[300px] h-[375px] mx-4 my-4 pt-4">
        <h4 className="card-title text-center justify-center mx-2">{title}</h4>
        <img className='w-[150px] h-[150px] mt-5' src={img} alt="" />
        {/* <p className="card-body text-center">{img}</p> */}
        <p className="card-body text-center">{`$${price}`}</p>
        <div className="card-actions justify-center mb-20">
            {/* <button className="btn bg-blue-700 text-white border-none">View</button> */}
            <button className="btn w-[200px] bg-blue-700 text-white border-none" onClick={addToCart}>Add</button>
        </div>
    </div>
  )
}

ItemCard.propTypes = {
    id: PropTypes.string,
    item: PropTypes.any,
    title: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
}

export default ItemCard