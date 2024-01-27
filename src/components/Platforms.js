import ProgressComp from "./ProgressComp";

const Platforms = () => {
  const backgroundColors = ["#6160DC", "#54C5EB", "#FFB74A", "#FF4A55"];
  const selectedColor =
    backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

  return (
    <div className="platforms">
      <div className="platform-header">
        <h2 className="platform-left-header">Top Platform</h2>
        <p className="platform-right-header">See All</p>
      </div>
      <ProgressComp
        title={"Book Bazaar"}
        progress={60}
        leftText={"2500000"}
        rightText={"15"}
        backgroundcolor={backgroundColors[0]}
        currency={"$"}
        sign={"+"}
      />
      <ProgressComp
        title={"Artisan Aisle"}
        progress={40}
        leftText={"1800000"}
        rightText={"10"}
        backgroundcolor={backgroundColors[1]}
        currency={"$"}
        sign={"+"}
      />
      <ProgressComp
        title={"Toy Troop"}
        progress={20}
        leftText={"1200000"}
        rightText={"8"}
        backgroundcolor={backgroundColors[2]}
        currency={"$"}
        sign={"+"}
      />
      <ProgressComp
        title={"XStore"}
        progress={24}
        leftText={"2500000"}
        rightText={"15"}
        backgroundcolor={backgroundColors[3]}
        currency={"$"}
        sign={"+"}
      />
      <ProgressComp
        title={"XStore"}
        progress={24}
        leftText={"2500000"}
        rightText={"15"}
        backgroundcolor={backgroundColors[0]}
        currency={"$"}
        sign={"+"}
      />
      <ProgressComp
        title={"XStore"}
        progress={24}
        leftText={"2500000"}
        rightText={"15"}
        backgroundcolor={backgroundColors[2]}
        currency={"$"}
        sign={"+"}
      />
    </div>
  );
};
export default Platforms;
