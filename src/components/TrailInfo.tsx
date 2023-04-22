import { Button, Card, Col, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TrailsItemProps } from "../models/trailItemProps.model";
import { Warning } from "../models/warning.model";
import { TrailInfoStrings } from "../models/enums/strings/trailInfoStrings";
import { selectType } from "./helpers/typeSelector";
import { List } from "@mui/material";
import { adminCheck } from "./adminCheck";


export function TrailInformations(trail: TrailsItemProps) {

  let informations: Warning[];
  if (trail.warnings != undefined) {
    informations = trail.warnings;
  } else {
    informations = [];
  }

  return (
    <Card className="h-100 shadow p3 mt-3">
      <Card.Body className="d-flex flex-column">
        <Row>
          <Col>
            <Card.Header className="d-flex justify-content-between align-items-baseline mb-4 ">
              <div className="fs-3">{trail.name}</div>
              <Link to="/addEvent" state={{ details: trail }}>
                <Button className="btn-sm" variant="outline-success">
                  {TrailInfoStrings.add}
                </Button>
              </Link>
            </Card.Header>
            <div style={{ maxHeight: "500px", overflow: "auto" }}>
              <List>
                <div>
                  {informations.map((warning: Warning, index) => (
                    <div key={index} className={selectType(warning.type)}>
                      {adminCheck(
                        localStorage.getItem("id"),
                        warning.approve,
                        warning.id
                      )}
                      <Col>
                        <Row>
                          <span>
                            {" "}
                            <b>
                              {TrailInfoStrings.type}: {warning.type}
                            </b>
                          </span>
                        </Row>
                        <Row>
                          <span>
                            {" "}
                            <b>{TrailInfoStrings.date}:</b> {warning.date}
                          </span>
                        </Row>
                        <Row>
                          <span>
                            {" "}
                            <b>{TrailInfoStrings.description}:</b>{" "}
                            {warning.description}
                          </span>
                        </Row>
                        <Row className="row flex-nowrap">
                          <div>
                            <b>{TrailInfoStrings.addedBy}:</b> {warning.addedBy}
                          </div>
                        </Row>
                      </Col>
                    </div>
                  ))}
                </div>
              </List>
            </div>
          </Col>
          <Col>
            <img
              className="d-block rounded w-100"
              src={trail.trailImgUrl}
              alt="First slide"
              height="600px"
              style={{ objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
