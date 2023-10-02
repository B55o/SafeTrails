import React from "react";
import { Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Hints } from "../components/hints";
import { NavbarShort } from "../components/NavbarShort";
import { TempWeatherCard } from "../components/tempWeatherComponent";
import { TrailsItemProps } from "../models/trailItemProps.model";

export function WeatherInfo() {
  const trailDetails: TrailsItemProps = {
    trialID: 0,
    lat: 0,
    lon: 0,
    name: "",
    trailImgUrl: "",
    trailSecImgUrl: "",
      exposure: "",
      avgTime: "",
      gradient: "",
      attention: "",
    height: "",
    warnings: [],
    wzniesienie: "",
    fatMapUrl: "",
    difficulty: "",
  };

  const [trailInfo, setTrailInfo] = React.useState({
    details: trailDetails,
  });

  const pageState = useLocation();

  React.useEffect(() => {
    let _state = pageState.state as any;
    setTrailInfo(_state);
    
  });
  return (
    <Col>
      <Row>
        {" "}
        <div className="d-flex justify-content-center">
          {/* <NavbarShort /> */}
        </div>
      </Row>
      <Row className="mb-4">
        <div>{TempWeatherCard(trailInfo.details)}</div>
      </Row>
      <Row>
      <div>{Hints()}</div>
      </Row>
    </Col>
  );
}
