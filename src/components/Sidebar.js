import logo from "../assets/icons/logo.svg";
import logoDark from "../assets/icons/logo-dark.svg";
import categoryIcon from "../assets/icons/side-icon1.svg";
import categoryIconDark from "../assets/icons/side-icon1-dark.svg";
import trendupIcon from "../assets/icons/side-icon2.svg";
import profileIcon from "../assets/icons/side-icon3.svg";
import boxIcon from "../assets/icons/side-icon4.svg";
import discountIcon from "../assets/icons/side-icon5.svg";
import infoIcon from "../assets/icons/side-icon6.svg";
import lightIconActive from "../assets/icons/light-active.svg";
import lightIconInActive from "../assets/icons/light-inactive.svg";
import darkIconInActive from "../assets/icons/dark-icon-inactive.svg";
import darkIconActive from "../assets/icons/dark-icon-active.svg";
import arrowRightIcon from "../assets/icons/side-down-icon1.svg";
import settingsIcon from "../assets/icons/side-down-icon2.svg";
import logoutIcon from "../assets/icons/side-down-icon3.svg";
import "./Sidebar.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { IoMdClose } from "react-icons/io";
const Sidebar = () => {
  const { DarkMode, setDarkMode, toggleTheme, navState, closeNav } =
    useContext(ThemeContext);
  const [activeItem, setActiveItem] = useState("Item 1");
  //const [DarkMode, setDarkMode] = useState(false);
  // Function to handle item click
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  // const handleMode = () => {
  //   setDarkMode(!DarkMode);
  // };
  return (
    <div className={navState ? "sidebar sidebarOpen" : "sidebar"}>
      <ul className="top-side-nav">
        <li className="close-div icon-div" onClick={closeNav}>
          <IoMdClose
            className="closeIcon"
            color={DarkMode ? "white" : "black"}
          />
        </li>
        <li>
          {DarkMode ? (
            <img src={logoDark} alt="logo" />
          ) : (
            <img src={logo} alt="logo" />
          )}
        </li>

        <li
          onClick={() => handleItemClick("Item 1")}
          className={activeItem === "Item 1" ? "icon-div active" : "icon-div"}
        >
          {DarkMode ? (
            <img
              className="sidebar-icons"
              src={categoryIconDark}
              alt="cat-icon"
            />
          ) : (
            <img className="sidebar-icons" src={categoryIcon} alt="cat-icon" />
          )}
        </li>
        <li
          onClick={() => handleItemClick("Item 2")}
          className={activeItem === "Item 2" ? "icon-div active" : "icon-div"}
        >
          <img className="sidebar-icons" src={trendupIcon} alt="trend-icon" />
        </li>
        <li
          onClick={() => handleItemClick("Item 3")}
          className={activeItem === "Item 3" ? "icon-div active" : "icon-div"}
        >
          <img className="sidebar-icons" src={profileIcon} alt="profile-icon" />
        </li>
        <li
          onClick={() => handleItemClick("Item 4")}
          className={activeItem === "Item 4" ? "icon-div active" : "icon-div"}
        >
          <img className="sidebar-icons" src={boxIcon} alt="box-icon" />
        </li>
        <li
          onClick={() => handleItemClick("Item 5")}
          className={activeItem === "Item 5" ? "icon-div active" : "icon-div"}
        >
          {" "}
          <img
            className="sidebar-icons"
            src={discountIcon}
            alt="discount-icon"
          />
        </li>
        <li
          onClick={() => handleItemClick("Item 6")}
          className={activeItem === "Item 6" ? "icon-div active" : "icon-div"}
        >
          <img className="sidebar-icons" src={infoIcon} alt="info-icon" />
        </li>
        <li className="mode-div">
          <div
            onClick={() => toggleTheme()}
            className={
              DarkMode === true ? " active-mode mode-wrapper" : "mode-wrapper"
            }
          >
            {DarkMode === true ? (
              <img
                style={{ width: "20px", height: "20px" }}
                className=""
                src={lightIconActive}
                alt="info-icon"
              />
            ) : (
              <img
                style={{ width: "20px", height: "20px" }}
                className=""
                src={lightIconInActive}
                alt="info-icon"
              />
            )}
          </div>

          <div
            onClick={() => toggleTheme()}
            className={
              DarkMode === false ? " active-mode mode-wrapper" : "mode-wrapper"
            }
          >
            {DarkMode !== true ? (
              <img
                style={{ width: "20px", height: "20px" }}
                className=""
                src={darkIconActive}
                alt="info-icon"
              />
            ) : (
              <img
                style={{ width: "20px", height: "20px" }}
                className=""
                src={darkIconInActive}
                alt="info-icon"
              />
            )}
          </div>
        </li>
      </ul>
      <ul className="bottom-side-nav">
        <li
          onClick={() => handleItemClick("Item 7")}
          className={activeItem === "Item 7" ? "icon-div active" : "icon-div"}
        >
          <img
            className="sidebar-icons"
            src={arrowRightIcon}
            alt="arrow-iccon"
          />
        </li>
        <li
          onClick={() => handleItemClick("Item 8")}
          className={activeItem === "Item 8" ? "icon-div active" : "icon-div"}
        >
          <img
            className="sidebar-icons"
            src={settingsIcon}
            alt="settings-icon"
          />
        </li>
        <li
          onClick={() => handleItemClick("Item 9")}
          className={activeItem === "Item 9" ? "icon-div active" : "icon-div"}
        >
          <img className="sidebar-icons" src={logoutIcon} alt="logout-icon" />
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
