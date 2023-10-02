import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { NavbarShort } from "../components/NavbarShort";
import { TrailDescription } from "../components/TrailDescription";
import { TrailsItemProps } from "../models/trailItemProps.model";
import { DescriptionStrings } from "../models/enums/strings/trailDescriptionStrings";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import "./../assets/CSS/DS.styles.css";

export function Description() {
  const trailDetails: TrailsItemProps = {
    lat: 0,
    lon: 0,
    name: "",
    trialID: -1,
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
  }, []);

  console.log(trailInfo.details);

  return (
    <div className="ds-background">
      <Col>
        {NavbarShort(trailInfo.details.name, trailInfo.details)}
        {TrailDescription(trailInfo.details)}
      </Col>
    </div>
  );
}
