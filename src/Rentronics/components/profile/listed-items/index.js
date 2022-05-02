import {Link} from "react-router-dom";

const ListedItems = ({listing}) => {

  const Availability = (listing.totalAvailable > 0) ? "Available" : "Reserved";

  return(
      <>
        <div className="ri_border border w-100 h-100 ms-0">
          <Link to={`/viewItem/${listing._id}`} className="text-decoration-none row">
          <div className="row">
            <div className="col-2 mt-3 mb-3 ps-4">
              <img className="pr-ri-pic rounded" alt="" src={listing.productImages[0]}/>
            </div>

            <div className="col-8 mt-2 ps-4">
              <div className="fs-6 fw-bold">{listing.productName}</div>
              <div className="fs-6">{listing.productDescription}</div>
              <div className="ri-listed-font text-secondary mt-2 mb-1">{Availability}</div>

            </div>

            <div className="col-2 mt-3">
              <div className="ri-price-font fw-bold pe-2">{listing.price}</div>
              <div className="ri-price-font fw-bold pe-2 float-start">USD</div>
            </div>
          </div>
          </Link>

        </div>
      </>
  );
}
export default ListedItems;