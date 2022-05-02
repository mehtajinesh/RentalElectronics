import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {getUserCart, placeOrder, removeProductItemCart} from "../../actions/cart-actions";

const Cart = () => {
    //TODO: Update profile ID fetching
    let currentUser = useSelector(state => state.currentUser);

    // const profile = useSelector(state => state.profile);
    const userID = currentUser && currentUser._id
    const data = {"userID":userID}
    const navigate = useNavigate();
    const dispatch= useDispatch();
    const cart = useSelector(state => state.cartDetails);
    console.log(cart)
    useEffect(() => {
        if (!userID) {
                navigate('/login');
        }
        getUserCart(dispatch,data)
    }, []);

    const handlePlaceOrder = () => {
        if (!userID) {
            navigate('/login');
        }
        placeOrder(data).then(r=> {
                alert("Order placed successfully. Navigating to home page");
                navigate('/home')
            }
        )
    }

    const handleRemoveItemFromCart = (item) => {
        if (!userID) {
            navigate('/login');
        }
        const removeProductData = {"userID":userID,"productID":item["productID"]['_id']}
        removeProductItemCart(dispatch,removeProductData).then(r=> {
                alert(`${item["productID"]['productName']} item removed successfully.`);
            }
        )
    }

    const totalPrice = !(Object.keys(cart).length === 0) && cart.map(item => item["productID"]["price"]).reduce((acc, amount) => acc + amount);

    return (
        <div className="m-5">
            <div className="d-flex flex-row row">
                <div className="d-flex flex-column col bg-light border rounded">
                    <div className="fs-3 fw-bold p-3">
                        Shopping Cart
                    </div>
                    {userID && (!cart.length > 0) && <div className="fs-4 text-center p-4">
                        Looks like your cart is empty.
                    </div>}
                    {userID && (cart.length > 0) && <div>
                        {
                            cart.map((item) => {
                                return (
                                    <div className="row align-items-center p-3">
                                        <div className="col-2">
                                            <img className="img-fluid" src={item["productID"]['productImages'][0]}/>
                                        </div>
                                        <div className="col">
                                            <div className="row text-muted">{item["productID"]['productName']}</div>
                                            <div className="row">Duration: {item["productID"]['duration']} months</div>
                                        </div>
                                        <div className="col">
                                            ${item["productID"]['price']}
                                        </div>
                                        <div className="col-1">
                                            <button className="btn" onClick={() => {handleRemoveItemFromCart(item)}}>
                                                <i className="fas fa-trash fa-pull-right"/>
                                            </button>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>}
                </div>
                {!(Object.keys(cart).length === 0) && (cart.length > 0) && <div className="ms-3 d-flex flex-column col-3 border rounded">
                    <div className="fs-3 fw-bold pt-3">
                        Summary
                    </div>
                    <div className="row">
                        <div className="col fw-bold">{cart.length} Item(s): </div>
                        <div className="col text-right">$ {totalPrice}</div>
                    </div>
                    <div className="row">
                        <div className="col fw-bold">Tax: </div>
                        <div className="col text-right">$ {Math.round(0.1*totalPrice)}</div>
                    </div>
                    <div className="row">
                        <div className="col fw-bold">Total Price: </div>
                        <div className="col text-right">$ {Math.round(1.1*totalPrice)}</div>
                    </div>
                    <div className="mb-4 mt-4">
                        <button className="btn btn-primary" onClick={handlePlaceOrder}>Checkout</button>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Cart;