import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TrailsItemProps } from "../models/trailItemProps.model";
import { ControlledCarousel } from "./Carousel";
import { DescriptionStrings } from "../models/enums/strings/trailDescriptionStrings";
import { List } from "@mui/material";

function ColWithButton(linkTo: string, label: string, trail: TrailsItemProps, variant: string) {
  return (
    <Col className="col-md-auto">
      <Link to={linkTo} state={{ details: trail }}>
        <Button
          className="btn-sm mb-4"
          variant={variant}
        >
          {label}
        </Button>
      </Link>
    </Col>
  );
}

export function TrailDescription(trail: TrailsItemProps): JSX.Element {
  const subtitleStyle: string = "mb-2 text-muted"
  var isAttentionOk = trail.attention;
  if (isAttentionOk === "" || isAttentionOk === undefined) {
    isAttentionOk = DescriptionStrings.warning;
  }
  return (
    <Col>
      <Card className="h-100 shadow p-3 w-100 mt-3">
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>{trail.name}</Card.Title>
              <Row>
                {ColWithButton("/Weather", DescriptionStrings.weather, trail, "outline-secondary")}
                {ColWithButton("/Information", DescriptionStrings.news, trail, "outline-warning")}
                {ColWithButton("/Equipment", DescriptionStrings.equipment,trail, "outline-info")}
              </Row>
              <div style={{maxHeight: '500px', overflow: 'auto'}}>
              <List>
              <Card.Subtitle className={subtitleStyle}>
                {DescriptionStrings.exposure}: 
              </Card.Subtitle>
              <Card.Text>{trail.exposure}</Card.Text>
              <Card.Subtitle className={subtitleStyle}>
                {DescriptionStrings.gradient}: 
              </Card.Subtitle>
              <Card.Text>{trail.gradient}</Card.Text>
              <Card.Subtitle className={subtitleStyle}>
                {DescriptionStrings.ascentTime}: 
              </Card.Subtitle>
              <Card.Text>{trail.avgTime}</Card.Text>
              <Card.Subtitle className={subtitleStyle}>
                {DescriptionStrings.upMeters}: 
              </Card.Subtitle>
              <Card.Text>{trail.wzniesienie}</Card.Text>
              <Card.Subtitle className={subtitleStyle}>
                {DescriptionStrings.info}: 
              </Card.Subtitle>
              <Card.Text>{isAttentionOk}</Card.Text>
              </List>
              </div>
            </Col>
            <Col className="col-7">
              <div>{ControlledCarousel(trail)}</div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}
