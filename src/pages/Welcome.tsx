import {
  Button,
  Card,
  Col,
  OverlayTrigger,
  Row,
  Stack,
  Tooltip,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CzarnyStawImgUrl from "./../assets/images/CzarnyStaw.jpeg";
import TripsDrawingImgUrl from "./../assets/images/trips.jpg";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";

export function WelcomeScreen() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const ColumnStyle: string = "d-flex justify-content-center mt-4";
  const DivStyle: string = "d-flex justify-content-center mb-2"

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
          localStorage.setItem("id", response.user.uid )
        }
        navigate("/home");
      })
      .catch((error) => {
        setAuthing(false);
        console.log(error.message);
      });
  };

  return (
      <Card className="shadow p-3 mt-4 align">
        <Row>
          <Col className="my-auto">
            <Card.Body>
              <div>
                <Col className="d-flex justify-content-center">
                  <img src={TripsDrawingImgUrl} height="350px" />
                </Col>
              </div>
              <Col className={ColumnStyle}>
                <div className={DivStyle}>
                  <h1>Safe Trail</h1>
                </div>
              </Col>
              <Col className={ColumnStyle}>
                <div className={DivStyle}>
                  <h5>keep up-to-date to stay safe in the mountains</h5>
                </div>
              </Col>
              <Stack gap={2} className="col-md-5 mx-auto mt-3">
                <div className="d-flex justify-content-center ">
                  <OverlayTrigger
                    key="bottom"
                    placement="bottom"
                    overlay={
                      <Tooltip id={`tooltip-bottom`}>
                        <strong>Logowanie przy uzyciu konta Google</strong>
                      </Tooltip>
                    }
                  >
                    <Link to="/home">
                      <Button
                        className="btn-lg"
                        variant="outline-success"
                        style={{ width: "225px" }}
                        onClick={() => signInWithGoogle()}
                        disabled={authing}
                      >
                        Zaloguj się
                      </Button>
                    </Link>
                  </OverlayTrigger>
                </div>
              </Stack>
            </Card.Body>
          </Col>
          <Col>
            <img
              className="d-block rounded w-100"
              src={CzarnyStawImgUrl}
              alt="First slide"
              height="700px"
              style={{ objectFit: "cover"}}
            />
          </Col>
        </Row>
      </Card>
  );
}
