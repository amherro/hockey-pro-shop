import { Link } from "react-router-dom"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <>
      <Link to='/'>
        <h1 className="text-center font-bold text-4xl text-black pt-7 md:pt-0 pb-7">Hockey Pro Shop</h1>
      </Link>
        <Navbar />
    </>
  )
}

export default Header