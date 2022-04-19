import React from "react";
import "./rentalItem.css";

const RentalItem = () => {
  return (

    <div className="container my-6">

        {/* <div className="my-5 ms-0 me-5 pe-0"> */}

        <div className="row">

          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">

            <div className="ri-left-column">

            <img className="rounded ms-0 ri-img" width="100%" height="auto"
                 src="https://www.zdnet.com/a/img/resize/42d669282543a649bfe6a25b861a898e3f117054/2022/01/13/1a257540-68a4-4759-adac-19201fde6609/apple-macbook-air.png?width=1200&height=900&fit=crop&format=pjpg&auto=webp" alt="">
            </img>

            </div>

          </div>



          <div className="col-xl-5 col-lg-5 col-md-8 col-sm-8">
            <div className="ri-middle-column">
            <div className="fs-5">
              Product Name
            </div>

            <div className="mt-2 small">
              Description: The review body: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboris aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

            <div className="mt-4 fs-5">
              Dimensions
            </div>

            <ul className="d-flex mt-1 small">
              <li className="col-4">
                width:
              </li>
              <li className="col-4">
                length:
              </li>
              <li className="col-4">
                height:
              </li>
            </ul>

            <div className="mt-4 fs-5">
              Features
            </div>

            <ul className="mt-1 small">
              <li>
                Feature 1
              </li>
              <li>
                Feature 2
              </li>
              <li>
                Feature 3
              </li>
            </ul>

            </div>
          </div>






          <div className="col-xl-4 col-lg-4">

            <div className="ri-right-column">

            <div className="mb-3">
              How long do you want to rent this for?
            </div>

            <div>
              <label htmlFor="customRange" className="form-label"/>
              <input type="range" className="form-range" min="0" max="5"
                     id="customRange"/>
            </div>


            <div className="d-flex">

              <div className="col-6">

                <div className="price-left-box-border border w-100 h-100 mt-4">
                  <div className="mt-3 ms-3">
                    <span className="fs-5">$999</span> <span className="small">/ mo</span>
                  </div>

                  <div className="small ms-3">
                    Monthly rent
                  </div>

                </div>

              </div>


              <div className="col-6">

                <div className="price-right-box-border border w-100 h-100 mt-4">
                  <div className="mt-3 ms-3 fs-5">
                    $1000
                  </div>

                  <div className="small ms-3">
                    Refundable deposit
                  </div>
                </div>

              </div>

            </div>


            <div>
              <div className="price-bottom-box-border border border-top-0 w-100 h-100 small">
                <div>
                  <ul className="d-flex mt-4 me-1">
                    <li className="col-4">
                      7 days <br/>free trial
                    </li>
                    <li className="col-4 ms-2 me-1">
                      Free <br/>delivery
                    </li>
                    <li className="col-4 ms-2 me-1">
                      Free <br/>upgrade
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-1 ms-3 small">
                <i className="fas fa-truck"/>
                <span className="ms-2 text-muted">
                  Delivery by 15 Apr 2022
                </span>
              </div>

              <btn className="mt-4 ms-3 btn btn-primary w-100">Book your item</btn>

            </div>


          </div>
          </div>
        </div>


</div>
  )
}
export default RentalItem;