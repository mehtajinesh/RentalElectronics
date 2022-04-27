

const Wishlist = () => {

  return(
      <>
        <div className="ri_border border w-100 h-100 ms-0">
          <div className="row">
            <div className="col-2 mt-3 mb-3 ps-4">
              <img className="pr-ri-pic rounded" alt="" src="https://m.media-amazon.com/images/I/61cCf94xIEL._AC_SX679_.jpg"/>
            </div>

            <div className="col-8 mt-2 ps-4">
              <div className="fs-6 fw-bold">Macbook Air 2021</div>
              <div className="fs-6">Some description</div>

            </div>

            <div className="col-2 mt-3">
              <div className="ri-price-font fw-bold pe-2">USD 2000</div>
            </div>
          </div>

        </div>
      </>
  );
}
export default Wishlist;