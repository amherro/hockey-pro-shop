import ItemCard from "./ItemCard"
import {Items} from "../itemList"

const ProductDisplay = () => {
  return (
    <section>
        <h3 className="text-center font-bold text-3xl mt-10">Products</h3>
        <div className="flex flex-wrap items-center justify-center w-full mt-10">
            {Items.map(item => (
                <div key={item.id}>
                    <ItemCard id={item.id} title={item.title} desc={item.description} price={item.price} img={item.img} />
                </div>
            ))}

        </div>
    </section>
  )
}

export default ProductDisplay