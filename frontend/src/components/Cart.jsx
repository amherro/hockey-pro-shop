import Icon from '@mdi/react';
import { mdiCart, mdiLoading } from '@mdi/js';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { getItemData } from '../itemList';
import CartCard from './CartCard';

const Cart = () => {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { items, getQuantity, getTotalPrice } = useContext(CartContext);

  const checkOut = async () => {
    setLoading(true);
    await fetch(
      `${
        process.env.NODE_ENV === 'production'
          ? 'https://hockey-ecommerce-server.onrender.com/checkout'
          : 'http://localhost:10000/checkout'
      }`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
        }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };
  return (
    <div className="modal-section flex justify-end mr-4 pt-4">
      <button
        className="btn bg-white hover:bg-gray-500"
        onClick={() => window.my_modal_3.showModal()}
      >
        <Icon path={mdiCart} size={1} color="black" />
      </button>
      {!checked && (
        <dialog id="my_modal_3" className="modal">
          <div
            id="modal-container"
            className="modal-box w-[90%] h-4/5 bg-[rgb(30,35,41)]"
          >
            <form method="dialog" className="">
              <button
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle btn-ghost border-white hover:btn-error text-white absolute right-4 top-4"
              >
                ✕
              </button>
              <h4 className="font-bold text-5xl text-white">Cart</h4>
              <h5 className="py-4 text-3xl text-white">My Items:</h5>
              <div className={items.length > 0 ? `min-h-[100px]` : ''}>
                {items.length <= 0 ? (
                  <h6 className="my-10 font-bold text-xl text-white">
                    Your cart is empty.
                  </h6>
                ) : (
                  items.map((item) => {
                    const cartItem = getItemData(item.id);
                    const itemQuantity = getQuantity(item.id);
                    return (
                      <div key={item.id}>
                        <CartCard
                          key={cartItem}
                          item={cartItem}
                          quantity={itemQuantity}
                        />
                      </div>
                    );
                  })
                )}
              </div>
              <h4 className="font-bold text-2xl text-right text-white">
                Total: ${getTotalPrice()}
              </h4>
            </form>
            <div className="flex justify-center mt-7">
              <button
                onClick={checkOut}
                id="checkout"
                className={`btn btn-md bg-blue-700 text-white p-0 w-[80%] ${
                  items.length === 0 && 'hidden'
                }`}
              >
                {loading ? `Loading...` : 'Checkout'}
                {loading && (
                  <Icon
                    path={mdiLoading}
                    size={1}
                    horizontal
                    vertical
                    rotate={100}
                    color="white"
                    spin
                  />
                )}
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Cart;
