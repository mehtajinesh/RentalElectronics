import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const ResultsPage = ({items}) => {
    let loggedIn = useSelector(state => state.loggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleAddToCart = ({item}) => {
        if (loggedIn) {
            dispatch({
                type:'ADD_ITEM_TO_CART',
                item
            });
            alert("Item " + item["item_title"] + " added to cart.")
        } else {
            alert("User not logged in. Navigating to Login")
            navigate('/login');
        }
    }

    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {
                items.map((item) => {
                    return (
                        <div className="col">
                            <div className="card h-100">
                                <img src={item["item_images"][0]} className="card-img-top p-2" alt="product primary image"/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.item_title}</h5>
                                    <p className="card-subtitle pt-2 pb-2 fw-bold">Price: ${item.item_price}</p>
                                    <button onClick={() => handleAddToCart({item})} className="btn btn-primary">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default ResultsPage;