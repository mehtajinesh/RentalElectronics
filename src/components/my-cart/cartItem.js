import React from 'react'
import './myCart.css'

const cartItem = () => {
  return (
        <div className="cart-item border-bottom my-2">
                    <div className="container">
                        <div className="row pb-0 my-3">

                            {/* TODO: need to make the image responsive */}
                            <div className="col-4">
                                <img className="rounded float-start" width="100%" height="100%"
                                    src="https://www.zdnet.com/a/img/resize/42d669282543a649bfe6a25b861a898e3f117054/2022/01/13/1a257540-68a4-4759-adac-19201fde6609/apple-macbook-air.png?width=1200&height=900&fit=crop&format=pjpg&auto=webp" alt="">
                                </img>
                            </div>

                            <div className="col-8">
                                <button type="button" className="btn-close float-end" aria-label="Close"></button>
                                
                                <h6 className="mb-0">Product Name</h6>
                                <small className="text-muted">Product Category &#183; Brand &#183; Model Number</small> 
                                
                                <div className="mt-2">
                                    <div className="row">
                                        <div className="col-3">
                                            <p className="checkout-detail">Checkout Date</p>
                                            <p className="checkout-detail">Return Date</p>
                                            <p className="checkout-detail">Rent Duration</p>
                                            <p className="checkout-detail">Quantity</p>
                                            <p className="checkout-detail">Leaser</p>
                                        </div>

                                        <div className="col-9 pb-2">
                                            <p className="checkout-detail">2022-05-04</p>
                                            <p className="checkout-detail">2022-05-07</p>
                                            <p className="checkout-detail">3 days</p>
                                            <p className="checkout-detail">1</p>
                                            <p className="checkout-detail">jake</p>
                                        </div>
                                    </div>

                                    <div className="product-cost border-top">
                                        <div className="row">
                                            <div className="col-3">
                                            <p className="pt-2">COST</p>
                                            </div>

                                            <div className="col-8">
                                                <p className="float-end pt-2">$50.00</p>
                                            </div>

                                            <div className="col-1"></div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
    </div>

   
  )
}

export default cartItem