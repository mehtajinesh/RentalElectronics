import {useSelector} from "react-redux";
import {addProductToCart} from "../../actions/view-item-actions";
import {useNavigate} from "react-router-dom";

const ResultsPage = ({items}) => {
    let currentUser = useSelector(state => state.currentUser);

    // const profile = useSelector(state => state.profile);
    const userID = currentUser && currentUser._id
    // const profile = useSelector(state => state.profile);
    // //TODO: Update profile ID fetching
    // const userID = profile && profile.userID
    const navigate =useNavigate()
    const handleAddToCart = ({item}) => {
        if (userID) {
            const data = {'userID':userID, 'productID': item["productID"]["_id"]}
            addProductToCart(data)
            alert("Item " + item["productName"] + " added to cart.")
        } else {
            alert("User not logged in. Navigating to Login")
            navigate('/login');
        }
    }
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {
                items && !(Object.keys(items).length === 0) && items.map((item) => {
                    return (
                        <div className="col">
                            <div className="card h-100" onClick={() => {
                                navigate(`/viewItem/${item._id}`);
                            }}>
                                <img src={item["productImages"][0]} className="card-img-top p-2" alt="product primary image"/>
                                <div className="card-body">
                                    <h5 className="card-title">{item["productName"]}</h5>
                                    <p className="card-subtitle pt-2 pb-2 fw-bold">Price: ${item["price"]}</p>
                                    { currentUser && (currentUser.userType === 'buyer') &&
                                    <button onClick={() => handleAddToCart({item})} className="btn btn-primary">Add to cart</button> }
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