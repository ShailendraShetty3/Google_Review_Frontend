import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, message } from "antd";
import { GoogleLogout } from "react-google-login";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Logout() {
  const navigate = useNavigate();

  const onSuccess = () => {
    // Clear session storage
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("userId");

    // Show success message
    message.success("Logged out successfully");

    // Navigate to the home page or login page
    navigate("/");
  };

  const onFailure = (error) => {
    console.error("Logout failed:", error);
    message.error("Logout failed. Please try again.");
  };

  return (
    //   <div style={{
    //       textAlign: "center",
    //     //   marginTop: "20px"
    //   }}>
    <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
      onFailure={onFailure}
    />
    // </div>
  );
}

export default Logout;
