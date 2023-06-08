import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId =
  "460190909818-d990ukpiqbeuo1hdaf4g01j80bo93oik.apps.googleusercontent.com";

function GoogleLogin() {
  const onSuccess = (res) => {
    console.log("login successfull user", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("login fail", res);
  };
  return (
    <>
      <div>
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </div>
    </>
  );
}

export default GoogleLogin;
