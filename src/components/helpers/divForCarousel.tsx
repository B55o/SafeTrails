import { Card, Col, Row } from "react-bootstrap";

export function divForCarousel(
  img: string,
  text: string,
  divStyleCustom?: string
): JSX.Element {
  const divStyle: string =
    divStyleCustom === undefined
      ? "d-flex justify-content-center"
      : divStyleCustom;

  return (
    <div className="d-flex justify-content-center w-100">
      <Card>
        <Card.Body>
          <Col>
            <Row>
              <div className={divStyle}>
                <img src={img} height="100px" />
              </div>
            </Row>
            <Row className={divStyle}>
              <div className="mt-3 mb-5 w-75">
                {" "}
                <b>{text}</b>
              </div>
            </Row>
          </Col>
        </Card.Body>
      </Card>
    </div>
  );
}
