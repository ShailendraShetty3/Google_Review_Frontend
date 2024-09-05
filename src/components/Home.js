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
          {/* <LogoutButton /> */}
    </div>
  );
};

export default Home;