import { Button, Card, Col, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TrailsItemProps } from "../models/trailItemProps.model";
import windcIconUrl from "./../assets/icons/wind.svg";
import globeIconUrl from "./../assets/icons/globe.svg";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { TrailsItemString } from "../models/enums/strings/trailsItemStrings";

export function TrailsItem(trail: TrailsItemProps): JSX.Element {
  const peakFromName: string = `https://www.google.com/maps/place/${trail.name}/data=!3m1!1e3`;
  const globalWeatherFromName: string = `https://www.ventusky.com/?p=49.218;19.946;10&l=snow&w=fast`;
  const toprUrl: string = "https://pogoda.topr.pl/";
  const lawinyToprUrl: string = "https://lawiny.topr.pl/";
  let warningBtnText: string = "";

  if (trail.warnings !== undefined) {
    if (trail.warnings?.length === 1) {
      warningBtnText = "Aktualizacja";
    } else if (trail.warnings?.length <= 4 && trail.warnings?.length > 1) {
      warningBtnText = "Aktualizacje";
    } else {
      warningBtnText = "Aktualizacji";
    }
  }

  let trailWarningsLength: number;
  if (trail.warnings != undefined) {
    trailWarningsLength = trail.warnings.length;
  } else {
    trailWarningsLength = 0;
  }

  return (
    <Card className="shadow p3">
      <Card.Img
        variant="top"
        src={trail.trailImgUrl}
        height="300px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-center align-items-baseline mb-4 ">
          {" "}
          <div className="fs-4">
            <b>{trail.name}</b> - {trail.height}
          </div>
        </Card.Title>
        <div className="d-flex justify-content-center align-items-baseline mb-4 ">
          <Row>
            <Col>
                <Link to="/Information" state={{ details: trail }}>
                  <Button
                    className="btn-sm justify-content-center"
                    variant="outline-warning"
                    style={{ width: "150px" }}
                  >
                    <b>{trail.warnings?.length}</b>
                    {"   "}
                    {warningBtnText}{" "}
                  </Button>
                </Link>
            </Col>
            <Col>
              <Link to="/Description" state={{ details: trail }}>
                <Button
                  className="btn-sm justify-content-around"
                  variant="outline-secondary"
                  style={{ width: "150px" }}
                >
                  {TrailsItemString.information}
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
        <div className="d-flex justify-content-center align-items-baseline mb-2">
          <Row>
            <Col className="col-md-auto">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="outline-secondary"
                >
                  {TrailsItemString.sites}
                </Dropdown.Toggle>
                <Dropdown.Menu variant="outline-secondary">
                  <Dropdown.Item
                    onClick={() =>
                      window.open(peakFromName, "_blank", "noopener,noreferrer")
                    }
                  >
                    <Row className="justify-content-between">
                      <Col>{TrailsItemString.googleMaps}</Col>
                    </Row>
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() =>
                      window.open(
                        globalWeatherFromName,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    <Row className="justify-content-around">
                      <Col>{TrailsItemString.ventusky}</Col>
                    </Row>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <DropdownItem
                    onClick={() =>
                      window.open(toprUrl, "_blank", "noopener,noreferrer")
                    }
                  >
                    {TrailsItemString.toprCams}
                  </DropdownItem>
                  <DropdownItem
                    onClick={() =>
                      window.open(
                        lawinyToprUrl,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    {TrailsItemString.toprAvalanches}
                  </DropdownItem>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
}
