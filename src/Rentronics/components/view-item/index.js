import {useNavigate, useParams} from "react-router-dom";
import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    addProductToCart,
    addProductToRecent,
    addProductToWishlist,
    getProductPageData
} from "../../actions/view-item-actions";
import Rating from "react-rating";
import * as service from '../services/best-buy-api-service.js'

const ViewItem = () => {
    const dispatch = useDispatch();
    const {id} = useParams()
    // put loading on
    //fetch product details from backend based on productID
    // get userID from profile in state
    let currentUser = useSelector(state => state.currentUser);

    // const profile = useSelector(state => state.profile);
    const userID = currentUser && currentUser._id;

    // const profile = useSelector(state => state.profile);
    // //TODO: Update profile ID fetching
    // const userID = profile && profile.userID
    const userIDProductID = {"userID":userID, "productID":id}
    useEffect(() => {
        console.log(currentUser);
        const productIDData = {"productID": id}
        getProductPageData(dispatch, productIDData).then(r=>{
            if (userID) {
                addProductToRecent(userIDProductID)
            }
        });

    }, []);
    
    // fetch product details from redux
    const item = useSelector(state => state.productDetails);
    const list_text = item["productDetails"] && !(Object.keys(item["productDetails"]).length === 0) && item["productDetails"]["productDescription"].trim().split("\n")
    const features = item["productFeatures"] && !(Object.keys(item["productFeatures"]).length === 0) && item["productFeatures"]
    const reviews = item["productReviews"] && !(Object.keys(item["productReviews"]).length === 0) && item["productReviews"]
    const navigate = useNavigate();
    const [itemCount, setItemCount] = useState(1);
    const availableItemCount = item["productDetails"] && !(Object.keys(item["productDetails"]).length === 0) && item["productDetails"]["totalAvailable"] - item["productDetails"]["totalSold"]
    // const sku = features && features.filter((feature) => feature["featureID"]["FeatureName"] === 'sku').map(feature => feature.featureID.FeatureValue)[0];
    const [bestBuyPrice , setBestBuyPrice] = useState();


    const getBestBuyPrice= async () => {
        console.log("features");
        // console.log(features);
        const sku = features && features.filter((feature) => feature["featureID"]["FeatureName"] === 'sku')[0]["featureID"]["FeatureValue"];
        const price = await service.getProductPrice(sku);
        setBestBuyPrice(price);
    }

    useEffect(() => {getBestBuyPrice()}, [item]);

    const handleRentNow = () => {
        // check  if user logged in, if not navigate to login
        if (userID) {
            const userIDProductIDCount = {"userID":userID, "productID":id, "productCount":itemCount}
            // get userID from profile in state
            addProductToCart(userIDProductIDCount).then(r => {
                // push the productID to backend for adding this into cart
                alert("Item " + item["productDetails"]["productName"] + " added to cart. Navigating to cart")
                navigate('/cart');
            })
        } else {
            alert("User not logged in. Navigating to Login")
            navigate('/login');
        }
    }

    const handleAddToCart = () => {
        if (userID) {
            // get userID from profile in state
            const userIDProductIDCount = {"userID":userID, "productID":id, "productCount":itemCount}
            addProductToCart(userIDProductIDCount).then(r => {
                // push the productID to backend for adding this into cart
                alert("Item " + item["productDetails"]["productName"] + " added to cart.")
            })
        } else {
            alert("User not logged in. Navigating to Login")
            navigate('/login');
        }
    }

    const handleAddToWishlist = () => {
        if (userID) {
            // get userID from profile in state
            addProductToWishlist(userIDProductID).then(r => {
                // push the productID to backend for adding this into cart
                alert("Item " + item["productDetails"]["productName"] + " added to Wishlist.")
            })
        } else {
            alert("User not logged in. Navigating to Login")
            navigate('/login');
        }
    }

    return (
        <div className="container">
            {console.log()}
            {item["productDetails"] && !(Object.keys(item["productDetails"]).length === 0) && <div className="row">
                <div className="col-12 col-sm-6">
                    <div id="carouselProductImages" className="carousel slide p-3" data-bs-ride="carousel">
                        <div className="carousel-indicators text-black">
                            {item["productDetails"]["productImages"].map((image, index) => {
                                return (<button type="button" data-bs-target="#carouselProductImages"
                                                data-bs-slide-to={index}
                                                className={`bg-dark ${index === 0 ? "active" : ""}`}/>);
                            })}
                        </div>
                        <div className="carousel-inner">
                            {item["productDetails"]["productImages"].map((image, index) => {
                                return (<div className={`carousel-item item ${index === 0 ? "active" : ""}`}>
                                    <img src={image} className="d-block w-100"/>
                                </div>);
                            })}
                        </div>
                        <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselProductImages" data-bs-slide="prev">
                            <i className="fas fa-circle-chevron-left fa-2x text-black"/>
                        </button>
                        <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselProductImages" data-bs-slide="next">
                            <i className="fas fa-circle-chevron-right fa-2x text-black"/>
                        </button>
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <div className="fs-3 fw-bold pt-2">
                        {item["productDetails"]["productName"]}
                    </div>
                    <div className="mt-2">
                        <div className="fs-4 fw-bold">
                            Description
                        </div>
                        <ul className="list-group pt-2">
                            {list_text.map((text) => {
                                return (<li className="list-group-item">{text}</li>);
                            })}
                        </ul>
                    </div>
                    <div className="mt-2">
                        <div className="fs-4 fw-bold">
                            Key Features
                        </div>
                        <div className="container mt-2">
                            <div className="row row-cols-3">
                                {!features && "None"}
                                {features && features.map((feature) => {
                                    return (<>
                                        <div className="col fw-bold">
                                            {feature["featureID"]["FeatureName"].toUpperCase()}:
                                        </div>
                                        <div className="col">
                                            {feature["featureID"]["FeatureValue"]}
                                        </div>
                                        <div className="col">
                                        </div>
                                    </>)
                                })}
                            </div>

                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="fs-4 fw-bold">
                            Duration
                        </div>
                        <ul className="list-group pt-2">
                            <li className="list-group-item bg-light">{item["productDetails"]["duration"]} months</li>
                        </ul>
                    </div>
                    <div className="mt-2">
                        <div className="fs-4 fw-bold">
                            Location
                        </div>
                        <ul className="list-group pt-2">
                            <li className="list-group-item bg-light">{item["productDetails"]["location"]}</li>
                        </ul>
                    </div>
                    <div className="mt-2">
                        <div className="fs-4 fw-bold">
                            Posted Date
                        </div>
                        <ul className="list-group pt-2">
                            <li className="list-group-item bg-light">{item["productDetails"]["postDate"]}</li>
                        </ul>
                    </div>
                    <div className="mt-2">
                        <div className="fs-4 fw-bold">
                            Seller
                        </div>
                        <ul className="list-group pt-2">
                            <li className="list-group-item bg-light">
                            <span onClick={() => {
                                                        navigate(`/profile/${item["productDetails"]["sellerID"]["_id"]}`);
                                                    }}>

                                <a href={item["productDetails"]["sellerID"]["_id"]}>
                                    {item["productDetails"]["sellerID"]["email"]}
                                </a>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-2">
                        <div className="fs-4 fw-bold">
                            Price
                        </div>
                        <ul className="list-group pt-2 ">
                            <li className="list-group-item bg-light">${item["productDetails"]["price"]}</li>
                        </ul>
                    </div>
                    <div className="mt-2">
                        <div className="fs-4 fw-bold">
                            Price on Best Buy
                        </div>
                        <ul className="list-group pt-2 ">
                            <li className="list-group-item bg-light">${bestBuyPrice}</li>
                        </ul>
                    </div>
                    { currentUser && (currentUser.userType === 'buyer') && <div className="mt-2">
                        <div className="fs-4 fw-bold">
                            Item Count
                        </div>
                        <select className="form-control" value={itemCount}
                                onChange={(e) => setItemCount(e.target.value)}>
                            {[...Array(availableItemCount + 1).keys()].slice(1).map((value) => {
                                return <option value={value}>{value}</option>;
                            })}
                        </select>
                    </div> }
                    <div className="mt-2">
                        <div className="fs-4 fw-bold">
                            Reviews
                        </div>
                        <div class="row">
                            {!reviews && <div className="col-sm-4 ps-3">
                                None</div>}
                            {
                                reviews && reviews.map((reviewData) => (
                                    <div className="col-sm-6">
                                        <div className="card text-dark bg-light mb-3">
                                            <div className="card-header">{reviewData.reviewID.reviewDate}</div>
                                            <div className="card-body">
                                                <h5 className="card-title" >{reviewData.reviewID.reviewTitle}</h5>
                                                <Rating
                                                    style={{
                                                        fontSize: `12px`, color: 'gold',
                                                    }}
                                                emptySymbol="far fa-star fa-2x"
                                                fullSymbol="fas fa-star fa-2x"
                                                initialRating={reviewData.reviewID.reviewRating}
                                                readonly
                                                />
                                                <p className="card-text">{reviewData.reviewID.reviewDescription}</p>
                                            </div>
                                            <div className="card-footer">
                                                <span className="text-muted my-auto fs-6">{`Reviewer: `}
                                                    <span onClick={() => {
                                                        navigate(`/profile/${reviewData.userID._id}`);
                                                    }}>{reviewData.userID.email}
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                    { (currentUser === null) &&
                    <div className="d-flex flex-row p-3 justify-content-around">
                        <btn className="btn text-white bg-success w-25" onClick={handleRentNow}><span
                            className="fas fa-bag-shopping"/> Rent Now
                        </btn>
                        <btn className="btn text-white bg-warning w-25" onClick={handleAddToCart}><span
                            className="fas fa-cart-plus"/> Add to Cart
                        </btn>
                        <btn className="btn text-white bg-danger w-25" onClick={handleAddToWishlist}><span
                            className="fas fa-heart"/> Wishlist
                        </btn>
                    </div>}

                    { (currentUser && (currentUser.userType === 'buyer')) &&
                    <div className="d-flex flex-row p-3 justify-content-around">
                        <btn className="btn text-white bg-success w-25" onClick={handleRentNow}><span
                            className="fas fa-bag-shopping"/> Rent Now
                        </btn>
                        <btn className="btn text-white bg-warning w-25" onClick={handleAddToCart}><span
                            className="fas fa-cart-plus"/> Add to Cart
                        </btn>
                        <btn className="btn text-white bg-danger w-25" onClick={handleAddToWishlist}><span
                            className="fas fa-heart"/> Wishlist
                        </btn>
                    </div>}
                </div>
            </div>}
        </div>);
}

export default ViewItem;