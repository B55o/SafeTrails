import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { NavbarShort } from "../components/NavbarShort";
import { TrailInformations } from "../components/TrailInfo";
import { TrailsItemProps } from "../models/trailItemProps.model";
import { Warning } from "../models/warning.model";

export function Information() {
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
  };
  const [trailInfo, setTrailInfo] = React.useState({
    details: trailDetails,
  });

  const pageState = useLocation();

  React.useEffect(() => {
    let _state = pageState.state as any;
    setTrailInfo(_state);
  });

  let trailWarnings: Warning[];
  if (trailInfo.details.warnings === undefined) {
    trailWarnings = [];
  } else {
    trailWarnings = trailInfo.details.warnings;
  }

  return (
    <Col>
      <Row>
        <div className="d-flex justify-content-center">
          <NavbarShort />
        </div>
      </Row>
      <Row>
        <div>
          <div>{TrailInformations(trailInfo.details)}</div>
        </div>
      </Row>
    </Col>
  );
}
