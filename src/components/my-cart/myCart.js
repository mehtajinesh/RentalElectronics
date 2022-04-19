import React from 'react'
import './myCart.css'
import CartItem from './cartItem'

const myCart = () => {
  return (
    <div className="container my-5">

        <div className="row">
        
            <div className="col-lg-1 col-xl-1"></div>

            <div className="col-lg-7 col-xl-7 px-4 py-3">
                <h6 className="border-bottom pb-2">MY CART</h6>

                {/* TODO: use dispatch to fill in items */}
                <CartItem/>
            </div>

            <div className="col-lg-3 col-xl-3 px-4 py-3 bg-light">
                <h6>TOTAL</h6>
                <button type="button" className="btn btn-primary w-100 my-4 px-2 py-2">Check Out</button>


            </div>
            <div className="col-lg-1 col-xl-1"></div>

        </div>
    </div>
  )
}

export default myCart