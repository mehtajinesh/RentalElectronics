import {Link} from "react-router-dom";

const Wishlist = ({wishlist}) => {

  return(
      <>
        <div className="ri_border border w-100 h-100 ms-0">
          <Link to={`/viewItem/${wishlist.productID._id}`} className="text-decoration-none row">
          <div className="row">
            <div className="col-2 mt-3 mb-3 ps-4">
              <img className="pr-ri-pic rounded" alt="" src={wishlist.productID.productImages[0]}/>
            </div>

            <div className="col-8 mt-2 ps-4">
              <div className="fs-6 fw-bold">{wishlist.productID.productName}</div>
              <div className="fs-6">{wishlist.productID.productDescription}</div>

            </div>

            <div className="col-2 mt-3">
              <div className="ri-price-font fw-bold pe-2">{wishlist.productID.price}</div>
              <div className="ri-price-font fw-bold pe-2 float-start">USD</div>
            </div>
          </div>
          </Link>

        </div>
      </>
  );
}
export default Wishlist;