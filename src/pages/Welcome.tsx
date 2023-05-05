import { Button, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CzarnyStawImgUrl from "./../assets/images/CzarnyStaw.jpeg";
import wSImage from "./../assets/images/wsImage.png";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import "../assets/CSS/WS.styles.css";
import googleLoginIcon from "../assets/images/btn_google_light_normal_ios.svg";
import "typeface-montserrat";
import { WelcomeString } from "../models/enums/strings/welcomeStrings";

export function WelcomeScreen() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);
    const provider = new GoogleAuthProvider();
    // select account
    provider.setCustomParameters({
      prompt: "select_account",
    });

    signInWithPopup(auth, provider)
      .then((response) => {
        if (response.user.photoURL) {
          localStorage.setItem("photo", response.user.photoURL);
        }
        if (response.user.displayName) {
          localStorage.setItem("name", response.user.displayName);
        }
        if (response.user.uid) {
          localStorage.setItem("id", response.user.uid);
        }
        navigate("/home");
      })
      .catch((error) => {
        setAuthing(false);
        console.log(error.message);
      });
  };

  return (
    <div className="background">
      <div className="login-container">
        <div className="column">
          <img src={wSImage} className="welcome-logo" />
          <span className="appName" style={{ fontFamily: "Montserrat" }}>
            {WelcomeString.appName}
          </span>
          <span className="description" style={{ fontFamily: "Montserrat" }}>
            {WelcomeString.appDescription}
          </span>
          <Stack gap={2}>
            <Link to="/home">
              <Button
                variant="light"
                className="button"
                onClick={() => signInWithGoogle()}
                disabled={authing}
              >
                <img src={googleLoginIcon} className="icon" />
                <span className="text">{WelcomeString.buttonText}</span>
              </Button>
            </Link>
          </Stack>
        </div>
        <div className="column">
          <img src={CzarnyStawImgUrl} className="welcome-image" />
        </div>
      </div>
    </div>
  );
}
