import ItemCard from "./ItemCard"
import {Items} from "../itemList"

const FeaturedItems = () => {
  return (
    <section>
        <h3 className="text-center font-bold text-3xl mt-10">Featured Items</h3>
        <div className="carousel w-full mt-10">
            {Items.map(item => (
                (item.id % 2 && item.id <= 10 )? <div className="carousel-item" key={item.id}>
                    <ItemCard id={item.id} title={item.title} desc={item.description} price={item.price} img={item.img} />
                </div> : ''
            ))}

        </div>
    </section>
  )
}

export default FeaturedItems