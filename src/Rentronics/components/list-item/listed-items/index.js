import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ListedItems = ({listing}) => {

  const Availability = (listing.totalAvailable > 0) ? "Available" : "Reserved";
  const navigate = useNavigate();

  const onClickHanlder = () => {
    navigate(`/viewItem/${listing._id}`)
  }

  const onClickEditItem = () => {
    navigate(`/edititem/${listing._id}`)
  }

  return(
      <>
      {console.log(listing)}
        <div className="ri_border border w-100 h-100 ms-0 bg-white">
          <div className="row">

                <div className="col-2 mt-3 mb-3 ps-4">
                  <img className="pr-ri-pic rounded" onClick={onClickHanlder} alt="" src={listing.productImages[0]}/>
                </div>


                <div className="col-8 mt-2 ps-4" onClick={onClickHanlder}>
                  <div className="fs-6 fw-bold">{listing.productName}</div>
                  <div className="fs-6">{listing.productDescription}</div>
                  <div className="fs-6 text-muted">Posted: {listing.postDate}</div>

                  <div className="ri-listed-font text-secondary mt-2 mb-1">{Availability}</div>

                </div>
 

            <div className="col-2 mt-3">
              <button type="button" class="btn btn-primary rounded-pill" onClick={onClickEditItem}>Edit Item</button>

              {/* <div className="ri-price-font fw-bold pe-2">{listing.duration}</div>
              <div className="ri-price-font fw-bold pe-2 float-start">USD</div> */}
            </div>
          </div>


        </div>
      </>
  );
}
export default ListedItems;