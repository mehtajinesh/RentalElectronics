
import RecentRentals from "../recent-rentals";

const Orders = ({order, userID}) => {
  const date = (order.orderID.orderDate.toString().substring(4,7)+", "+order.orderID.orderDate.toString().substring(11,16));
  const rentals = order.orderID.productID;
  const uid = userID;

  return(
      <>
        {rentals.map((rental) => (
            <RecentRentals userID={uid} rental={rental} date={date} key={rental._id}/>
        ))}
      </>
  );
}
export default Orders;