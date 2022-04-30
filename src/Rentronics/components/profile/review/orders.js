
import RecentRentals from "../recent-rentals";

const Orders = ({ order }) => {
  const date = (order.orderID.orderDate.toString().substring(4,7)+", "+order.orderID.orderDate.toString().substring(11,16));
  const rentals = order.orderID.productID;

  return(
      <>
        {rentals.map((rental) => (
            <RecentRentals rental={rental} date={date} key={rental._id}/>
        ))}
      </>
  );
}
export default Orders;