import searchIcon from "../assets/icons/nav-icon4.svg";
import searchIconDark from "../assets/icons/nav-icon4-dark.svg";
import dateIcon from "../assets/icons/nav-icon1.svg";
import dateIconDark from "../assets/icons/nav-icon1-dark.svg";
import notifyIcon from "../assets/icons/nav-icon2.svg";
import notifyIconDark from "../assets/icons/nav-icon2-dark.svg";
import profilePic from "../assets/images/nav-image1.svg";
import dropIcon from "../assets/icons/nav-icon3.svg";
import dropIconDark from "../assets/icons/nav-icon3-dark.svg";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { GiHamburgerMenu } from "react-icons/gi";
import ProfileComponent from "./ProfileComponent";
const Navbar = () => {
  const {
    DarkMode,
    setProfileState,
    openNav,
    closeNav,
    showProfile,
    profileState,
  } = useContext(ThemeContext);
  const profileRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleClickOutside = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setProfileState(false);
    }
  };

  const today = new Date();
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const dateFormatter = new Intl.DateTimeFormat("en-US", options);
  const formattedDate = dateFormatter.format(today);
  return (
    <div className={"navbar"}>
      {/*  */}
      <div className="left-nav">Dashboard</div>
      <div className="right-nav">
        <div className="left-right-nav">
          <div className="input-div">
            <img
              style={{ width: "12px", height: "12px" }}
              src={DarkMode ? searchIconDark : searchIcon}
              alt="search-icon"
            />
            <input
              className="nav-search"
              type="search"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="mid-right-nav">
          {DarkMode ? (
            <img
              style={{ width: "15px", height: "15px" }}
              src={dateIconDark}
              alt="cal-icon"
            />
          ) : (
            <img
              style={{ width: "15px", height: "15px" }}
              src={dateIcon}
              alt="cal-icon"
            />
          )}
          <p className="nav-date">{formattedDate}</p>
        </div>
        <div className="right-right-nav">
          {DarkMode ? (
            <img
              style={{ cursor: "pointer" }}
              src={notifyIconDark}
              alt="notifi-icon"
            />
          ) : (
            <img
              style={{ cursor: "pointer" }}
              src={notifyIcon}
              alt="notifi-icon"
            />
          )}
          <div ref={profileRef} onClick={showProfile} className="profile-div">
            <img src={profilePic} alt="profile-pic" />
            <div className="names">
              <p
                style={{
                  color: `${DarkMode ? "#fafafa" : "#26282c"}`,
                  fontWeight: "500",
                  fontSize: "16px",
                  marginBottom: ".3rem",
                }}
              >
                Justin Bergson
              </p>
              <p
                style={{
                  color: `${DarkMode ? "#b8b7bb" : "#787486"}`,
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Justin@gmail.com
              </p>
            </div>
            <img
              className={profileState === true ? "" : "tranform-180"}
              src={DarkMode ? dropIconDark : dropIcon}
              alt="drop-icon"
            />
          </div>
        </div>
      </div>
      <div className="hamburger-div" onClick={openNav}>
        <GiHamburgerMenu
          className="hamburger"
          color={DarkMode ? "white" : "black"}
        />
      </div>
      <ProfileComponent profileState={profileState} />
    </div>
  );
};
export default Navbar;
