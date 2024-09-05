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













// import React, { useState } from 'react';
// import { GoogleLogin } from 'react-google-login';
// import { useNavigate } from 'react-router-dom';

// const clientId = '940242726326-13ta80dsv2kq385kbhu2h6bcq7fjv8vc.apps.googleusercontent.com';

// function Login() {
//   const [showLogin, setShowLogin] = useState(false);
//   const navigate = useNavigate();

//   const onSuccess = (res) => {
//     console.log('Login Success current user: ', res.profileObj);
//     const token = res.tokenId;
//     console.log('Access Token: ', token);

//     // Store the token in sessionStorage
//     sessionStorage.setItem('accessToken', token);

//     // Redirect to the home page
//     navigate('/home');
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
//     <div>
//       <button onClick={() => setShowLogin(true)}>Login with Google</button>
      
//       {showLogin && (
//         <GoogleLogin
//           clientId={clientId}
//           buttonText="Login"
//           onSuccess={onSuccess}
//           onFailure={onFailure}
//           cookiePolicy={'single_host_origin'}
//           isSignedIn={true}
//           scope="https://www.googleapis.com/auth/business.manage"
//         />
//       )}
//     </div>
//   );
// }

// export default Login;









import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, message, Button, Input, Typography, Form } from 'antd';
import { GoogleLogin } from 'react-google-login';

const { Text } = Typography;

const clientId = '940242726326-13ta80dsv2kq385kbhu2h6bcq7fjv8vc.apps.googleusercontent.com';

function LoginForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSignin = async (values) => {
    setLoading(true);
    try {
      const { email, password } = values;
      const response = await axios.post('http://127.0.0.1:8000/auth/login/', { email, password });
      message.success("Login successful");
      const { admin } = response.data;
      if (admin) {
        navigate('/admin');
      } else {
        sessionStorage.setItem('userId', response.data.id);
        console.log(response.data.id);
        navigate('/home');
      }
    } catch (error) {
      message.error("Login failed. Please check your credentials.");
      // console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };



  ///////////////////////////

  const [showLogin, setShowLogin] = useState(false);

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
    <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f0f2f5" }}>
      <Card
        bordered={false}
        style={{ width: 400, padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Sign In</h2>
        
        <Form
          onFinish={handleSignin}
          layout="vertical"
          initialValues={{ remember: true }}
        >
          {/* Email input */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { 
                required: true, 
                message: "Please enter your email address" 
              },
              { 
                type: "email", 
                message: "Please enter a valid email address" 
              }
            ]}
          >
            <Input
              placeholder="Email address"
            />
          </Form.Item>

          {/* Password input */}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { 
                required: true, 
                message: "Please enter your password" 
              }
            ]}
          >
            <Input.Password
              placeholder="Password"
            />
          </Form.Item>

          {/* Submit button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>


        <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* <button onClick={() => setShowLogin(true)}>Login with Google</button>
      
      {showLogin && ( */}
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onClick={
            <>
            onSuccess={onSuccess}
            onFailure={onFailure}
            </>
          }
          onSuccess={onSuccess}  // Handles successful login
        onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
          scope="https://www.googleapis.com/auth/business.manage"
        />
      {/* )} */}
        </div>



        {/* Register link */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Text>Don't have an account? <a href="/register">Register</a></Text>
        </div>
      </Card>
    </div>
  );
}

export default LoginForm;
