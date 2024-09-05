// import { GoogleLogin } from "react-google-login"

// const clientId = "940242726326-13ta80dsv2kq385kbhu2h6bcq7fjv8vc.apps.googleusercontent.com"


// function Login() {

//     const onSuccess = (res) => {
//         console.log("Login Success current user ", res.profileObj);
//     }

//     const onFailure = (res) => {
//         console.log("Login Failed ", res);
//     }

//     return (
//         <div id="signInButton">
//             <GoogleLogin
//                 clientId={clientId}
//                 buttonText="Login"
//                 onSuccess={onSuccess}
//                 onFailure={onFailure}
//                 cookiePolicy={'single_host_origin'}
//                 isSignedIn={true}
//             />
//         </div>
//     )
// }

// export default Login





// import React from 'react';
// import { GoogleLogin } from 'react-google-login';
// import { useNavigate } from 'react-router-dom';

// const clientId = '940242726326-13ta80dsv2kq385kbhu2h6bcq7fjv8vc.apps.googleusercontent.com'; // Replace with your actual Client ID

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













import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const clientId = '940242726326-13ta80dsv2kq385kbhu2h6bcq7fjv8vc.apps.googleusercontent.com';

function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const onSuccess = (res) => {
    console.log('Login Success current user: ', res.profileObj);
    const token = res.tokenId;
    console.log('Access Token: ', token);

    // Store the token in sessionStorage
    sessionStorage.setItem('accessToken', token);

    // Redirect to the home page
    navigate('/home');
  };

  const onFailure = (res) => {
    console.log('Login Failed: ', res);
    if (res.error === 'popup_closed_by_user') {
      console.warn('Login popup was closed by the user.');
      alert('Login popup was closed. Please try again.');
    } else {
      console.error('Login failed: ', res);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div>
      <button onClick={() => setShowLogin(true)}>Login with Google</button>
      
      {showLogin && (
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
          scope="https://www.googleapis.com/auth/business.manage"
        />
      )}
    </div>
  );
}

export default Login;
