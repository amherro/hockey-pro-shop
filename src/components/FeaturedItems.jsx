import ItemCard from "./ItemCard"
import {Items} from "../itemList"

const FeaturedItems = () => {
  return (
    <section>
        <h3>Featured Items</h3>
        <div className="carousel w-full mt-10">
            {Items.map(item => (
                <div className="carousel-item" key={item.id}>
                    <ItemCard id={item.id} title={item.title} desc={item.description} price={item.price} img={item.img} />
                </div>
            ))}

        </div>
    </section>
  )
}

export default FeaturedItems