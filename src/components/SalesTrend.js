import { useState } from "react";
import RechartBar from "./RechartBar";
import Select from "react-select";
import "./SalesTrend.css";
import dropIcon from "../assets/icons/nav-icon4.svg";
const SalesTrend = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  //   const Listoptions = [
  //     { value: "weekly", label: "Weekly" },
  //     { value: "monthly", label: "Monthly" },
  //   ];
  const Listoptions = ["Weekly", "Monthly"];
  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="bar-chart-div" style={{}}>
      <div className="sales-header-div">
        <h3 className="sales-header">Sales Trends</h3>
        <div className="sort-div">
          <p className="sort-text">Sort by:</p>
          {/* <Select
            options={Listoptions}
            onChange={handleSelect}
          /> */}
          <select
            className="drop-down"
            value={selectedOption}
            onChange={(e) => handleSelect(e.target.value)}
          >
            {Listoptions.map((option, index) => (
              <option className="select-drop" key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <RechartBar selectedOption={selectedOption} />
    </div>
  );
};
export default SalesTrend;
