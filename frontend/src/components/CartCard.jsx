import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartCard = ({ item, quantity }) => {
  const { addItem, decreaseItemCount } = useContext(CartContext);
  const { title, price, img } = item;
  return (
    <div className="card pt-3 pb-5">
      <div className="flex">
        <div className="card-title text-white">{title}</div>
        <div className="card-body p-0 items-end text-white">{`$${
          Math.round(price * quantity * 100) / 100
        }`}</div>
      </div>
      <div className="flex justify-between">
        <img src={img} alt={title} className="w-[70px] h-[70px] pt-2" />
        <div className="card-actions p-0 pt-2 flex items-end">
          <button
            type="button"
            className="btn bg-blue-700 text-white"
            onClick={(e) => {
              e.preventDefault();
              addItem(item.id);
            }}
          >
            +
          </button>
          <h1 className="align-center mb-3 text-white">{quantity}</h1>
          <button
            type="button"
            className="btn bg-blue-700 text-white"
            onClick={(e) => {
              e.preventDefault();
              decreaseItemCount(item.id);
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  id: PropTypes.number,
  quantity: PropTypes.number,
  item: PropTypes.any,
  title: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
};

export default CartCard;
