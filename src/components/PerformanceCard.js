import "./Performance.css";
import CountUp from "react-countup";
const PerformanceCard = ({
  icon,
  line,
  percentIcon,
  text,
  value,
  percentValue,
  income,
  profit,
  loss,
}) => {
  return (
    <div className="performance-card">
      <div className="top-performance">
        <img src={icon} alt="top-icon" />
        <img src={line} alt="line" />
      </div>
      <div className="mid-performance">
        <h3 className="mid-perf-text">{text}</h3>
        {income ? (
          <h2 className="mid-perf-value">
            ${<CountUp end={parseInt(value)} duration={4} />}
          </h2>
        ) : (
          <h2 className="mid-perf-value">
            {<CountUp end={parseInt(value)} duration={4} />}
          </h2>
        )}
      </div>
      <div className="bottom-performance">
        <div
          className={
            profit
              ? "percent-div profit-percent-div"
              : "percent-div loss-percent-div"
          }
        >
          <img src={percentIcon} alt="percent-icon" />
          <p
            className={
              profit
                ? "percent-value profit-percent-value"
                : "percent-value loss-percent-value"
            }
          >
            {<CountUp end={percentValue} duration={4} />}%
          </p>
        </div>
        <p className="prev-month-text">vs. previous month</p>
      </div>
    </div>
  );
};
export default PerformanceCard;
