import { useState } from "react";
import { Card, Nav } from "react-bootstrap";
import { WeatherBasic } from "../models/weatherBasic.model";
import items from "./../data/genericInformations.json";

export function Hints(): JSX.Element {
  const [hint, setHint] = useState<WeatherBasic>(
    items.weatherBasicInformation[0]
  );

  return (
    <Card className="bg-white shadow-sm mb-3" style={{ width: "89vw" }}>
      <Card.Header>
        <Nav variant="tabs">
          {items.weatherBasicInformation.map((item: WeatherBasic) => (
            <Nav.Item key={item.id}>
              <Nav.Link
                onClick={() => {
                  setHint(item);
                }}
              >
                {item.name}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Text>{hint.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
