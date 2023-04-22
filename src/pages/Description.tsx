import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { NavbarShort } from "../components/NavbarShort";
import { TrailDescription } from "../components/TrailDescription";
import { TrailsItemProps } from "../models/trailItemProps.model";

export function Description() {
  const trailDetails: TrailsItemProps = {
    lat: 0,
    lon: 0,
    name: "",
    trialID: -1,
    trailImgUrl: "",
    trailSecImgUrl:"",
      exposure: "",
      avgTime: "",
      gradient: "",
      attention: "",
    height: "",
    warnings: [],
    wzniesienie: ""
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
        <div className="d-flex justify-content-center">
          <NavbarShort />
        </div>
      </Row>
      <Row>
        <div className="mb-4">{TrailDescription(trailInfo.details)}</div>
      </Row>
    </Col>
  );
}
