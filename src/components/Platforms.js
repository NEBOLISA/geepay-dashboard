import ProgressComp from "./ProgressComp";
import { platformData } from "../mockData";
import { useRef, useState } from "react";
const Platforms = () => {
  const backgroundColors = ["#6160DC", "#54C5EB", "#FFB74A", "#FF4A55"];
  const platformRef = useRef(null);

  const [copiedData, setCopiedData] = useState([...platformData]);
  const [expanded, setExpanded] = useState(false);

  const toggleDisplay = () => {
    setExpanded(!expanded);
  };

  let maxNumber = 3;
  let dataToShow;
  let disableBtn = platformData.length <= maxNumber;

  let sliceData = copiedData.slice(0, maxNumber);
  if (platformData.length <= maxNumber || expanded === true) {
    dataToShow = platformData;
  } else {
    dataToShow = sliceData;
  }

  return (
    <div ref={platformRef} className="platforms">
      <div className="platform-header">
        <h2 className="platform-left-header">Top Platform</h2>
        <button
          className={disableBtn ? "disable" : "top-header-btn"}
          disabled={disableBtn}
          onClick={toggleDisplay}
        >
          {expanded ? "See Less" : "See All"}{" "}
        </button>
      </div>
      {dataToShow.map((item) => (
        <ProgressComp
          title={item.title}
          progress={item.progress}
          leftText={item.value}
          rightText={item.percent}
          backgroundcolor={item.colorValue}
          currency={item.currency}
          sign={item.sign}
        />
      ))}
    </div>
  );
};
export default Platforms;
