import { Button, Card, Col, ProgressBar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TrailsItemProps } from "../models/trailItemProps.model";
import { ControlledCarousel } from "./Carousel";
import { DescriptionStrings } from "../models/enums/strings/trailDescriptionStrings";
import { List } from "@mui/material";
import "./../assets/CSS/components/TrailDescription.styles.css";

interface progressBarProps {
  variant: string;
  amount: number;
}

function ColWithButton(
  linkTo: string,
  label: string,
  trail: TrailsItemProps
): JSX.Element {
  return (
    <Link to={linkTo} state={{ details: trail }}>
      <span className="td-text">{label}</span>
    </Link>
  );
}

function RenderDescriptionSection(
  sectionTitle: string,
  sectionDescription: string
): JSX.Element {
  return (
    <div>
      <div className="td-description">
        <span className="td-trail-main">{sectionTitle}:</span>
      </div>
      <div className="td-title">
        <span className="td-text">{sectionDescription}</span>
      </div>
    </div>
  );
}

export function TrailDescription(trail: TrailsItemProps): JSX.Element {
  var isAttentionOk: string = trail.attention;
  var progressBar: progressBarProps;
  if (isAttentionOk === "" || isAttentionOk === undefined) {
    isAttentionOk = DescriptionStrings.warning;
  }
  if (trail.difficulty === "Easy") {
    progressBar = {
      variant: "success",
      amount: 25
    };
  } else if (trail.difficulty === "Medium") {
    progressBar = {
      variant: "warning",
      amount: 50
    };
  } else {
    progressBar = {
      variant: "danger",
      amount: 75
    };
  }

  return (
    <div className="td-all-data-container">
      <div className="td-grid">
        <div className="td-grid-item">
          <Col>
            <div className="td-description">
              <span className="td-trail-main">Poziom trudności:</span>
            </div>
            <div className="td-title">
              <ProgressBar
                now={progressBar.amount}
                label={trail.difficulty}
                variant={progressBar.variant}
                style={{ height: "32px" }}
              />
            </div>
            <List>
              {RenderDescriptionSection(
                DescriptionStrings.exposure,
                trail.exposure
              )}
              {RenderDescriptionSection(
                DescriptionStrings.gradient,
                trail.gradient
              )}
              {RenderDescriptionSection(
                DescriptionStrings.ascentTime,
                trail.avgTime
              )}
              {RenderDescriptionSection(
                DescriptionStrings.upMeters,
                trail.wzniesienie
              )}
              {RenderDescriptionSection(DescriptionStrings.info, isAttentionOk)}
            </List>
          </Col>
        </div>
        <div className="td-grid-item">
          <iframe
            className="td-iframe"
            src={`https://fatmap.com/routeid/${trail.fatMapUrl}?fmid=em`}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
