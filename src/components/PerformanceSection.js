import "./Performance.css";
import averageIcon from "../assets/icons/perf-average-sales-icon.svg";
import profitIcon from "../assets/icons/perf-profit-line-icon.svg";
import lossIcon from "../assets/icons/perf-loss-line-icon.svg";
import incomeIcon from "../assets/icons/perf-total-income-icon.svg";
import orderIcon from "../assets/icons/perf-total-order-icon.svg";
import refundIcon from "../assets/icons/perf-total-refund-icon.svg";
import trendingDownIcon from "../assets/icons/perf-trending-down-icon.svg";
import trendingUpIcon from "../assets/icons/perf-trending-up-icon.svg";

import PerformanceCard from "./PerformanceCard";
const PerformanceSection = () => {
  return (
    <div className="PerformanceSection">
      <PerformanceCard
        profit
        icon={orderIcon}
        line={profitIcon}
        percentIcon={trendingUpIcon}
        text="Total Order"
        value={350}
        percentValue={23.7}
      />
      <PerformanceCard
        icon={refundIcon}
        line={lossIcon}
        percentIcon={trendingDownIcon}
        text="Total Refund"
        value={270}
        percentValue={23.5}
      />
      <PerformanceCard
        icon={averageIcon}
        line={lossIcon}
        percentIcon={trendingDownIcon}
        text="Average Sales"
        value={1567}
        percentValue={23.5}
      />
      <PerformanceCard
        profit
        income
        icon={incomeIcon}
        line={profitIcon}
        percentIcon={trendingUpIcon}
        text="Total Income"
        value={"350000"}
        percentValue={23.5}
      />
    </div>
  );
};
export default PerformanceSection;
