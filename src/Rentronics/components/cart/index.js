import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Cart = () => {
    const currentUser = useSelector(state => state.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let loggedIn = useSelector(state => state.loggedIn);
    
    useEffect(() => {    if (!loggedIn) {
        navigate('/login');
    }})

    const removeItemFromCart = (item) => {
        dispatch({
            type:'REMOVE_ITEM_FROM_CART',
            item
        });
    }
    let totalPrice = 0;
    if(currentUser["cart"].length > 0){
        totalPrice = currentUser["cart"].map(item => item["item_price"]).reduce((acc, amount) => acc + amount);
    }

    return (
        <div className="m-5">
            <div className="d-flex flex-row row">
                <div className="d-flex flex-column col bg-light border rounded">
                    <div className="fs-3 fw-bold p-3">
                        Shopping Cart
                    </div>
                    {!currentUser["cart"].length > 0 && <div className="fs-4 text-center p-4">
                        Looks like your cart is empty.
                    </div>}
                    {currentUser["cart"].length > 0 && <div className="">
                        {
                            currentUser["cart"].map((item) => {
                                return (
                                    <div className="row align-items-center p-3">
                                        <div className="col-2">
                                            <img className="img-fluid" src={item['item_images'][0]}/>
                                        </div>
                                        <div className="col">
                                            <div className="row text-muted">{item['item_title']}</div>
                                            <div className="row">Duration: {item['item_rent_duration']} months</div>
                                        </div>
                                        <div className="col">
                                            ${item['item_price']}
                                        </div>
                                        <div className="col-1">
                                            <button className="btn" onClick={() => {removeItemFromCart(item)}}>
                                                <i className="fas fa-trash fa-pull-right"/>
                                            </button>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>}
                </div>
                {currentUser["cart"].length > 0 && <div className="ms-3 d-flex flex-column col-3 border rounded">
                    <div className="fs-3 fw-bold pt-3">
                        Summary
                    </div>
                    <div className="row">
                        <div className="col fw-bold">{currentUser["cart"].length} Item(s): </div>
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
                        <button className="btn btn-primary">Checkout</button>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Cart;