import { useEffect, useRef } from "react";

const ProfileComponent = ({ profileState }) => {
  return (
    <div
      className={
        profileState ? "profile-show profileComponent " : "profileComponent"
      }
    >
      <p
        className="profile-header"
        style={{ fontWeight: 600, fontSize: "17px" }}
      >
        My Account
      </p>
      <div className="profile-body">
        <p className="body-text">Profile</p>
        <p className="body-text">Billing</p>
        <p className="body-text">Subscription</p>
        <p className="body-text">Usage</p>
      </div>
    </div>
  );
};
export default ProfileComponent;
