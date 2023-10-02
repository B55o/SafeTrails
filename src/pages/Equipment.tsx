import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Nav,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { TrailsItemProps } from "../models/trailItemProps.model";
import { NavbarShort } from "../components/NavbarShort";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { IconButton } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import seasons from "./../data/gear.json";

export interface Winter {
  id: number;
  gear: Gear[];
}

export interface Gear {
  id: number;
  name: string;
  photoUrl: string;
  shopUrl: string;
  description?: string;
}

export function Equipment() {
  const [popUp, setPopUp] = useState(true);
  const trailDetails: TrailsItemProps = {
    lat: 0,
    lon: 0,
    name: "",
    height: "",
    trialID: -1,
    warnings: [],
    trailImgUrl: "",
    trailSecImgUrl: "",
      exposure: "",
      avgTime: "",
      gradient: "",
      attention: "",
    wzniesienie: "",
    fatMapUrl: "",
    difficulty: "",
  };
  const [trailInfo, setTrailInfo] = React.useState({
    details: trailDetails,
  });

  const [item, setItem] = React.useState<Gear>(seasons.Zima[0]);
  const [season, setSeason] = React.useState(seasons.Zima);

  const pageState = useLocation();

  React.useEffect(() => {
    let _state = pageState.state as any;
    setTrailInfo(_state);
  });

  if (popUp === true) {
    return (
      <>
        <div className="d-flex justify-content-center mt-5">
          <Card
            style={{ width: "400px", height: "350px" }}
            className="shadow-sm"
          >
            <Card.Header
              className="d-flex justify-content-center"
              style={{ backgroundColor: "#FFBF00", opacity: 0.7 }}
            >
              <div className="mt-3" style={{ height: "50px", opacity: 1 }}>
                <h3>Uwaga!</h3>
              </div>
            </Card.Header>
            <Card.Body className="d-flex justify-content-center">
              <b>
                W tym widoku zostanie wyświetlony sprzęt niezbędny do uprawiania
                turystyki górskiej i wysokogórskiej w określonych warnukach
                pogodowych. Bardzo wazne jest jednak zapoznanie się ze sprzętem
                i przynajmniej podstawowe umiejętności korzystania z niego w
                sytuacjach awaryjnych!
              </b>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-center">
              <Button
                className="btn-sm justify-content-center"
                variant="outline-warning"
                style={{ width: "150px" }}
                onClick={() => {
                  setPopUp(false);
                }}
              >
                <b>Zamknij</b>
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="d-flex justify-content-center">
          {/* <NavbarShort /> */}
        </div>
        <Card className="bg-white shadow p-3 mb-3 mt-3">
          <Card.Header>
            <Row>
              <Col className="col-auto">
                <div>
                  <OverlayTrigger
                    key="top-zima"
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-top`}>
                        <strong>Zima</strong>
                      </Tooltip>
                    }
                  >
                    <IconButton
                      color="default"
                      size="medium"
                      aria-label="logout"
                      onClick={() => {
                        setSeason(seasons.Zima);
                      }}
                    >
                      <AcUnitIcon />
                    </IconButton>
                  </OverlayTrigger>
                </div>
              </Col>
              <Col className="col-auto">
                <div>
                  <OverlayTrigger
                    key="top-zima"
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-top`}>
                        <strong>Wiosna/Lato/Jesień</strong>
                      </Tooltip>
                    }
                  >
                    <IconButton
                      color="default"
                      size="medium"
                      aria-label="logout"
                      onClick={() => {
                        setSeason(seasons.Lato);
                      }}
                    >
                      <WbSunnyIcon />
                    </IconButton>
                  </OverlayTrigger>
                </div>
              </Col>
            </Row>
            <Nav variant="tabs" defaultActiveKey="#first">
              {season.map((item: Gear) => (
                <Nav.Item key={item.id}>
                  <Nav.Link
                    onClick={() => {
                      setItem(item);
                    }}
                  >
                    {item.name}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Body className="d-flex flex-column">
              <Row>
                <Col>
                  <Row className="mb-4 mt-5 ">
                    <div>
                    <Button
                      className="btn-sm justify-content-center"
                      variant="outline-info"
                      style={{ width: "150px" }}
                      onClick= {() => window.open(
                        item.shopUrl,
                        "_blank",
                        "noopener,noreferrer"
                      ) }
                    >
                      Link do sklepu
                    </Button>
                    </div>
                  </Row>
                  <Row>
                    <div>
                      <b>{item.description}</b>
                    </div>
                  </Row>
                </Col>
                <Col>
                  <img
                    className="d-block rounded w-100"
                    src={item.photoUrl}
                    alt="First slide"
                    height="500px"
                    style={{ objectFit: "scale-down" }}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card.Body>
        </Card>
      </>
    );
  }
}
