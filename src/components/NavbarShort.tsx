import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import wSImage from "./../assets/images/wsImage.png";
import defaultProfileImageUrl from "../assets/icons/profileDefault.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import "./../assets/CSS/components/NavbarShort.styles.css";
import { TrailsItemProps } from "../models/trailItemProps.model";
import { DescriptionStrings } from "../models/enums/strings/trailDescriptionStrings";

function TrailNav(linkTo: string, label: string, trail: TrailsItemProps) {
  return (
    <div className="ns-nav-link-container">
      <Link to={linkTo} state={{ details: trail }} className="ns-link">
        <span className="ns-text">{label}</span>
      </Link>
    </div>
  );
}

export function NavbarShort(
  trail: string,
  trailInfoDetails: TrailsItemProps
): JSX.Element {
  let navigate = useNavigate();
  let imgTemp: string | null = localStorage.getItem("photo");
  let profileImage: string;

  if (imgTemp !== null) {
    profileImage = imgTemp;
  } else {
    profileImage = defaultProfileImageUrl;
  }

  return (
    <Navbar
      expand="lg"
      variant="light"
      bg="secondary"
      className="ns-navbar-container"
    >
      <Container fluid>
        <Navbar.Brand className="d-flex align-items-top">
          <img src={wSImage} height="40" alt="" loading="lazy" />
          <span className="align-middle ms-3 ns-title">{trail}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            {TrailNav("/Weather", DescriptionStrings.weather, trailInfoDetails)}
            {TrailNav(
              "/Information",
              DescriptionStrings.news,
              trailInfoDetails
            )}
            {TrailNav(
              "/Equipment",
              DescriptionStrings.equipment,
              trailInfoDetails
            )}
          </Nav>
          <Nav className="ms-auto ns-left-section">
            <Nav.Link onClick={() => navigate(-1)} className="ns-left-controls">
              <div className="ns-left-controls-row">
                <ArrowBackIcon />
              </div>
              <div className="ns-left-controls-row">
                <span className="ns-left-text">Powrót</span>
              </div>
            </Nav.Link>
            <Nav.Link as={Link} to="/home" className="ns-left-controls">
              <div className="ns-left-controls-row">
                <HomeIcon />
              </div>
              <div className="ns-left-controls-row">
                <span className="ns-left-text">Strona Główna</span>
              </div>
            </Nav.Link>
          </Nav>
          <div className="image-container">
            <img
              src={profileImage}
              referrerPolicy="no-referrer"
              height={"46px"}
              width={"46px"}
              className="img-fluid rounded-circle"
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
