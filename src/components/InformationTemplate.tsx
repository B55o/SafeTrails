import { Dayjs } from "dayjs";
import { Col, Row } from "react-bootstrap";
import { selectType } from "./helpers/typeSelector";
import { TrailInfoStrings } from "../models/enums/strings/trailInfoStrings";

export function InformationContainerTemplate(
  type: string,
  description: string,
  timeValue: Dayjs | null
) {
  let dATDisplay: string =
    timeValue != null ? timeValue.format("YYYY/MM/DD - HH:MM") : "";

  return (
    <div className={selectType(type)}>
      <Col>
        <Row className="row flex-nowrap">
          <b>
            {TrailInfoStrings.type}: {type}
          </b>
        </Row>
        <Row className="row flex-nowrap">
          <div>
            <b>{TrailInfoStrings.date}:</b> {dATDisplay}
          </div>
        </Row>
        <Row>
          <div>
            <b>{TrailInfoStrings.description}:</b> {description}
          </div>
        </Row>
        <Row className="row flex-nowrap">
          <div>
            <b>{TrailInfoStrings.addedBy}:</b> {localStorage.getItem("name")}
          </div>
        </Row>
      </Col>
    </div>
  );
}
