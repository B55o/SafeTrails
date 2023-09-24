import { IconButton } from "@mui/material";
import { Col, Nav, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";
import { getAuth, signOut } from "firebase/auth";
import { OverlayElement } from "./Overlay";
import defaultProfileImageUrl from "../assets/icons/profileDefault.svg";
import { NavbarString } from "../models/enums/strings/navbarString";
import "./../assets/CSS/components/Navbar.styles.css";

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
    <div className="navbar-container">
      <Row className="row-navbar">
        <Col className="col1 col-auto">
          <div className="content-wrapper">
            <span className="title" style={{ fontFamily: "Montserrat" }}>
              {NavbarString.title}
            </span>
          </div>
        </Col>
        <Col className="col2">
          <div className="me-auto">
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
        <Col className="col2 col-auto">
          <div>
            <span className="welcome-message" style={{ fontFamily: "Montserrat" }}>
              {NavbarString.welcomeMsg}
              {localStorage.getItem("name")}!
            </span>
          </div>
        </Col>
        <Col className="col3 col-auto">
          <div className="image-container">
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
