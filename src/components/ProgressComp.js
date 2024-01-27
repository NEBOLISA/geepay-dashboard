import CountUp from "react-countup";
const ProgressComp = ({
  title,
  leftText,
  rightText,
  backgroundcolor,
  progress,
  currency,
  sign,
}) => {
  return (
    <div className="progress-comp">
      <h3 className="progress-header-text">{title}</h3>
      <div className="progress-bar">
        <div
          style={{ background: `${backgroundcolor}`, width: `${progress}%` }}
          className="progress-bar-fill"
        ></div>
      </div>
      <div className="bottom-texts-div">
        <p className="progress-left-text">
          {currency}
          {<CountUp end={parseInt(leftText)} duration={4} />}
        </p>
        <p className="progress-right-text">
          {sign}
          {<CountUp end={rightText} duration={4} />}%
        </p>
      </div>
    </div>
  );
};
export default ProgressComp;
