import React, { useEffect } from "react";
import LoginButton from "./login";
import LogoutButton from "./logout";
import { gapi } from "gapi-script";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const Home = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });
  return (
    <div>
      <LoginButton />
    </div>
  );
};

export default Home;
