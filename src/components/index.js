import React, { useState } from 'react';
import Home from './Home';
import GoogleMyBusinessReviews from './books';
import LogoutButton from "./logout"

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const locationId = "YOUR_LOCATION_ID"; // Replace with the actual location ID

  return (
    <div className="App">
      
        <GoogleMyBusinessReviews accessToken={accessToken} locationId={locationId} />
  
    </div>
  );
}

export default App;