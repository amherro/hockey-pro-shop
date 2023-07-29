import { Link } from "react-router-dom"

const Custom = () => {
  return (
    <section className="flex flex-col items-center mx-10 md:mx-0">
        <h3 className="text-center font-bold text-3xl mt-10">Need something customized?</h3>
        <p className="text-center font-bold text-lg">Contact us to discuss your vision so we can bring it to life.</p>
        <Link to='/contact'>
            <button className="btn bg-blue-700 text-white border-none mt-4 mb-12 w-[200px]">Contact Us</button>
        </Link>
    </section>
  )
}

export default Custom