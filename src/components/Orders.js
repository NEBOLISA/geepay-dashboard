import OrderCard from "./OrderCard";
import { data } from "../mockData";
const Orders = () => {
  return (
    <div className="orders">
      <div className="top-header">
        <h3>Last Orders</h3>
        <p>See All</p>
      </div>
      <div className="order-header">
        <p>Name</p>
        <p>Date</p>
        <p>Amount</p>
        <p>Status</p>
        <p>Invoice</p>
      </div>
      {data.map((item) => (
        <OrderCard
          name={item.name}
          date={item.date}
          amount={item.amount}
          status={item.status}
          profile={item.profile}
        />
      ))}
    </div>
  );
};
export default Orders;
