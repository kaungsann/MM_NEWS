import React from "react";
import { GoogleLogout } from "react-google-login";
const clientId =
  "460190909818 - d990ukpiqbeuo1hdaf4g01j80bo93oik.apps.googleusercontent.com";

function GoogleLogouts() {
  const onSuccess = (res) => {
    console.log("logout successful");
  };
  return (
    <>
      <div>
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={onSuccess}
        />
      </div>
    </>
  );
}

export default GoogleLogouts;
