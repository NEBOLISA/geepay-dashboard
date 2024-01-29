import OrderCard from "./OrderCard";
import { data } from "../mockData";
import { useRef, useState } from "react";
import { animateScroll } from "react-scroll";
import emptyIcon from "../assets/images/no-data.svg";
const Orders = () => {
  const ordersRef = useRef(null);

  const [copiedData, setCopiedData] = useState([...data]);
  const [expanded, setExpanded] = useState(false);

  const toggleDisplay = () => {
    setExpanded(!expanded);
  };

  let maxNumber = 4;
  let dataToShow;
  let disableBtn = data.length <= maxNumber;

  let sliceData = copiedData.slice(0, maxNumber);
  if (data.length <= maxNumber || expanded === true) {
    dataToShow = data;
  } else {
    dataToShow = sliceData;
  }

  return (
    <div ref={ordersRef} id="list" className="orders">
      {data.length !== 0 ? (
        <>
          <div className="top-header">
            <h3>Last Orders</h3>
            <button
              className={disableBtn ? "disable" : "top-header-btn"}
              disabled={disableBtn}
              onClick={toggleDisplay}
            >
              {expanded ? "See Less" : "See All"}{" "}
            </button>
          </div>
          <div className="ordercard-wrapper-div">
            <div className="order-header">
              <p>Name</p>
              <p>Date</p>
              <p>Amount</p>
              <p>Status</p>
              <p>Invoice</p>
            </div>

            {dataToShow.map((item) => (
              <OrderCard
                name={item.name}
                date={item.date}
                amount={item.amount}
                status={item.status}
                profile={item.profile}
              />
            ))}
          </div>
        </>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "32px",
              marginBottom: "1.7rem",
            }}
          >
            No Orders to Show
          </p>
          <img
            style={{
              width: "240px",
              height: "240px",
              display: "block",
              margin: "0 auto",
            }}
            src={emptyIcon}
            alt="emptyIcon"
          />
        </div>
      )}
    </div>
  );
};
export default Orders;
