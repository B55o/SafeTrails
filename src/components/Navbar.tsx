import { IconButton } from "@mui/material";
import { Col, Nav, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";
import { getAuth, signOut } from "firebase/auth";
import { OverlayElement } from "./Overlay";
import defaultProfileImageUrl from "../assets/icons/profileDefault.svg";
import { NavbarString } from "../models/enums/strings/navbarString";

export function Navbar(): JSX.Element {
  const auth = getAuth();

  let imgTemp: string | null = localStorage.getItem("photo");
  let profileImage: string;

  if (imgTemp !== null) {
    profileImage = imgTemp;
  } else {
    profileImage = defaultProfileImageUrl;
  }
  return (
    <div
      className="shadow p-3 mb-2 d-flex align-items-center align-self-center justify-content-center"
      style={{ height: "65px" }}
    >
      <Row className="w-100 d-flex justify-content-between mt-2">
        <Col className="align-self-center col-auto mt-2">
          <div>
            <h3>
              <b>{NavbarString.title}</b>
            </h3>
          </div>
        </Col>
        <Col className="d-flex justify-content-center align-self-center">
          <div className="me-auto d-flex justify-content-center">
            <Nav>
              {OverlayElement(
                "bottom",
                "O stronie",
                "O stronie",
                <Nav.Link to="/about" as={NavLink}>
                  <IconButton color="default" size="small" aria-label="logout">
                    <InfoIcon />
                  </IconButton>
                </Nav.Link>
              )}
            </Nav>
          </div>
        </Col>
        <Col className="d-flex justify-content-center align-self-center col-auto">
          <div className="d-flex justify-content-center">
           <b>{NavbarString.welcomeMsg}{localStorage.getItem("name")}!</b>
          </div>
        </Col>
        <Col className="col-auto align-self-end">
          <div className="mb-2">
            <img
              src={profileImage}
              referrerPolicy="no-referrer"
              height={"46px"}
              width={"46px"}
              className="img-fluid rounded-circle"
            />
          </div>
        </Col>
        <Col className="d-flex align-self-end col-auto">
          <div>
            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={
                <Tooltip id={`tooltip-bottom`}>
                  <strong>{NavbarString.logOut}</strong>
                </Tooltip>
              }
            >
              <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>
                  <IconButton
                    color="default"
                    size="medium"
                    aria-label="logout"
                    onClick={() => {
                      signOut(auth);
                    }}
                  >
                    <LogoutIcon />
                  </IconButton>
                </Nav.Link>
              </Nav>
            </OverlayTrigger>
          </div>
        </Col>
      </Row>
    </div>
  );
}
