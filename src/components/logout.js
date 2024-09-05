import { GoogleLogin } from "react-google-login"

const clientId = "940242726326-13ta80dsv2kq385kbhu2h6bcq7fjv8vc.apps.googleusercontent.com"


function Logout() {

    const onSuccess = (res) => {
        console.log("Logout Successful ");
    }

    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
                
            />
        </div>
    )
}

export default Logout