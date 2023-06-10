import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="hero-image mt-10">
        <div className="hero-text flex flex-col content-center">
            <h2 className="text-center font-bold text-2xl pt-10">Elite Hockey Equipment</h2>
            <p className="text-center mx-20 text-xl mt-5">The latest and greatest hockey equipment to help you become the best player you can.</p>
            {/* <button className="btn btn-primary my-8 mb-10 mx-24">
                <Link to='/products'>Browse Equipment</Link>
            </button> */}
            <Link to='/products'> 
              <button className="btn btn-primary">Browse Equipment</button>
            </Link>
        </div>
    </section>
  )
}

export default Hero