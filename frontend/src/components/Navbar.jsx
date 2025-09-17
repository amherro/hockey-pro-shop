import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <nav>
      {isMobile ? (
        <div className="dropdown flex justify-center mt-7 mx-20 rounded-lg z-50">
          <label tabIndex={0} className="btn m-1 w-full bg-[rgb(30,35,41)]">
            <Icon path={mdiMenu} size={1} color="white" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-[rgb(30,35,41)] rounded-box w-[120%] mt-14"
          >
            <li>
              <Link to="/" className="bg-[rgb(30,35,41)] text-slate-50">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="bg-[rgb(30,35,41)] text-slate-50">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="bg-[rgb(30,35,41)] text-slate-50">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <ul className="flex justify-evenly mt-7 mb-14">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
