import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="hero-image mt-10">
        <div className="hero-text flex flex-col content-center pt-20">
            <h2 className="text-center font-bold text-2xl pt-10">Elite Hockey Equipment</h2>
            <p className="text-center mx-20 text-xl mt-5">The latest and greatest hockey equipment to help you become the best player you can.</p>
            <Link to='/products' className="self-center mt-5"> 
              <button className="btn w-[200px] bg-blue-700 text-white border-none">Browse Equipment</button>
            </Link>
        </div>
    </section>
  )
}

export default Hero