import invoiceIcon from "../assets/icons/invoice-icon.svg";
import invoiceIconDark from "../assets/icons/invoice-icon-dark.svg";
import CountUp from "react-countup";
import "./OrderCard.css";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
const OrderCard = ({ name, date, amount, status, profile }) => {
  const { DarkMode } = useContext(ThemeContext);
  return (
    <div className="ordercard">
      <div className="name-div">
        <img src={profile} alt="profile-icon" />
        <p className="name">{name}</p>
      </div>
      <p className="date">{date}</p>
      <p className="amount">${<CountUp end={amount} duration={4} />}</p>
      <p
        className={
          status === "paid" ? "status status-paid" : "status status-refund"
        }
      >
        {status}
      </p>
      <div className="invoice-div">
        {DarkMode ? (
          <img src={invoiceIconDark} alt="invoice icon" />
        ) : (
          <img src={invoiceIcon} alt="invoice icon" />
        )}
        <p className="view-text">View</p>
      </div>
    </div>
  );
};
export default OrderCard;
