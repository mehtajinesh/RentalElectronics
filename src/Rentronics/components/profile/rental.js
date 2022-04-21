import MyListedItems from '../data/listed-product-items.json'
import MultiProductCarousel from "../home-screen/product-multi-carousel";

const ItemList = () => {
    return (<div className="d-flex flex-column p-3">
        <div className="d-flex mb-2 ms-3">
            <div className="ps-2 my-auto">
                <i className="fa-solid fa-eye" style={{color: "black"}}/>
            </div>
        </div>
        <div className="d-flex">
            <MultiProductCarousel items={MyListedItems}/>
        </div>
    </div>);
}

export default ItemList;