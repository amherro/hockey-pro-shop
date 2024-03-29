import Custom from "../components/Custom"
import FeaturedItems from "../components/FeaturedItems"
import Header from "../components/Header"
import Hero from "../components/Hero"

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedItems />
      <Custom />
    </div>
  )
}

export default Home