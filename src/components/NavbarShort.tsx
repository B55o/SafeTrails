import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import { OverlayElement } from "./Overlay";

export function NavbarShort(): JSX.Element {
  let navigate = useNavigate();
  return (
    <NavbarBs
      className="shadow p-3 align-items-center"
      bg="#7393B3;"
      style={{ height: "65px" }}
    >
      <Container>
        <IconButton
          color="default"
          aria-label="arrow back"
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon />
        </IconButton>
        <Nav className="me-auto">
          {OverlayElement(
            "bottom",
            "Strona główna",
            "strona główna",
            <Nav.Link to="/home" as={NavLink}>
              <IconButton color="default" size="small" aria-label="home">
                <HomeIcon />
              </IconButton>
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </NavbarBs>
  );
}
