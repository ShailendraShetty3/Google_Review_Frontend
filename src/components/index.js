import React, { useState } from "react";
import Home from "./Home";
import GoogleMyBusinessReviews from "./books";
import LogoutButton from "./logout";

function App() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "20px",
        // backgroundColor: "#EEEEFF"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          zIndex: 1000,
          marginBottom: "2%",
          "@media (max-width: 768px)": {
            right: "0.5rem",
            top: "0.5rem",
            width: "2.4rem",
            height: "2.4rem",
          },
        }}
      >
        <LogoutButton />
      </div>

      <div style={{ padding: "1.2rem", paddingTop: "4rem" }}>
        <GoogleMyBusinessReviews />
      </div>
    </div>
  );
}

export default App;
