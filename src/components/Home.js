// import React, {useEffect} from 'react';
// import LoginButton from "./login";
// import LogoutButton from "./logout"
// import { gapi } from 'gapi-script';

// const clientId = "940242726326-13ta80dsv2kq385kbhu2h6bcq7fjv8vc.apps.googleusercontent.com"

// const Home = () => {

//     useEffect(() => {
//         function start() {
//             gapi.client.init({
//                 clientId: clientId,
//                 scope:""
//             })
//         }
//         gapi.load('client:auth2', start);
//     })
//   return (
//     <div>
//           <LoginButton />
//           <LogoutButton />
//     </div>
//   );
// };

// export default Home;










import React, {useEffect} from 'react';
import LoginButton from "./login";
import LogoutButton from "./logout"
import { gapi } from 'gapi-script';

const clientId = "940242726326-13ta80dsv2kq385kbhu2h6bcq7fjv8vc.apps.googleusercontent.com"

const Home = () => {

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope:""
            })
        }
        gapi.load('client:auth2', start);
    })
  return (
    <div>
          <LoginButton />
          <LogoutButton />
    </div>
  );
};

export default Home;




// import React from 'react';
// import { GoogleLogin } from 'react-google-login';
// import { useNavigate } from 'react-router-dom';

// const clientId = '940242726326-13ta80dsv2kq385kbhu2h6bcq7fjv8vc.apps.googleusercontent.com';

// function Login() {
//   const navigate = useNavigate();

//   const onSuccess = (res) => {
//     console.log('Login Success current user: ', res.profileObj);
//     const token = res.tokenId;
//     console.log('Access Token: ', token);

//     // Store the token in sessionStorage
//     sessionStorage.setItem('accessToken', token);

//     // Redirect to the home page
//     // navigate('/home');
//   };

//   const onFailure = (res) => {
//     console.log('Login Failed: ', res);
//     if (res.error === 'popup_closed_by_user') {
//       console.warn('Login popup was closed by the user.');
//       alert('Login popup was closed. Please try again.');
//     } else {
//       console.error('Login failed: ', res);
//       alert('Login failed. Please try again.');
//     }
//   };

//   return (
//     <div id="signInButton">
//       <GoogleLogin
//         clientId={clientId}
//         buttonText="Login"
//         onSuccess={onSuccess}
//         onFailure={onFailure}
//         cookiePolicy={'single_host_origin'}
//         isSignedIn={true}
//         scope="https://www.googleapis.com/auth/business.manage"
//       />
//     </div>
//   );
// }

// export default Login;















// import React, { useState } from 'react';
// import Login from './login';
// import GoogleMyBusinessReviews from './reviews';
// import LogoutButton from "./logout"

// function App() {
//   const [accessToken, setAccessToken] = useState(null);
// //   const locationId = "YOUR_LOCATION_ID"; // Replace with the actual location ID

//   return (
//     <div className="App">
    
//                   <>
//               <GoogleMyBusinessReviews
//                 //   accessToken={accessToken}
//                 //   locationId={locationId}
//               />
//                   <LogoutButton />
//                   </>

//     </div>
//   );
// }

// export default App;
