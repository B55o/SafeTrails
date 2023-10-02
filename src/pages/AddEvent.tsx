import { TextField } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";
import { Button, Card, Col, Dropdown, Form, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { InformationContainerTemplate } from "../components/InformationTemplate";
import { strings } from "../models/enums/types";
import { TrailsItemProps } from "../models/trailItemProps.model";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/config";
import { AddEventString } from "../models/enums/strings/addEventString";

export function AddEvent() {
  let outlineColor: string;
  const pageState = useLocation();
  const warningsCollectionRef = collection(db, "Warnings");

  const trailDetails: TrailsItemProps = {
    lat: 0,
    lon: 0,
    name: "",
    height: "",
    trialID: -1,
    warnings: [],
    trailImgUrl: "",
    trailSecImgUrl: "",
    exposure: "",
    avgTime: "",
    gradient: "",
    attention: "",
    wzniesienie: "",
    fatMapUrl: "",
    difficulty: "",
  };

  const [description, setDescription] = useState("");
  const [type, setType] = useState(strings.warning);
  const [name] = useState(localStorage.getItem("name"));
  const [trailInfo, setTrailInfo] = useState({
    details: trailDetails,
  });
  const [timeValue, setTimeValue] = React.useState<Dayjs | null>(
    dayjs("2023-10-14T12:00")
  );

  const handleNameChange = (event: { target: { value: any } }) => {
    const value = event.target.value;
    setDescription(value);
  };

  const handleDATChange = (newTimeValue: Dayjs | null) => {
    setTimeValue(newTimeValue);
  };

  if (type === strings.warning) {
    outlineColor = "outline-warning";
  } else if (type === strings.danger) {
    outlineColor = "outline-danger";
  } else {
    outlineColor = "outline-info";
  }

  React.useEffect(() => {
    let _state = pageState.state as any;
    setTrailInfo(_state);
  });

  const createUpdate = async () => {
    await addDoc(warningsCollectionRef, {
      addedBy: name,
      date: timeValue?.format("YYYY.MM.DD - HH:mm"),
      description: description,
      name: trailInfo.details.name,
      type: type,
    });
  };

  return (
    <Col className="mt-4">
      <div className="mb-4">
        <Card className="shadow p-3">
          <Card.Header>
            <b>{AddEventString.addNew}</b>
          </Card.Header>
          <Card.Body>
            <b>{AddEventString.type}</b>
            <Dropdown className="mb-4">
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant={outlineColor}
              >
                {type}
              </Dropdown.Toggle>
              <Dropdown.Menu variant="outline-secondary">
                <Dropdown.Item
                  onClick={() => {
                    setType(strings.warning);
                  }}
                >
                  {strings.warning}
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setType(strings.danger);
                  }}
                >
                  {strings.danger}
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setType(strings.information);
                  }}
                >
                  {strings.information}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="mb-1">
              <b>{AddEventString.checkDate}</b>
            </div>
            <div className="mb-4">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  value={timeValue}
                  onChange={handleDATChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>
                  <b>{AddEventString.description}</b>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={handleNameChange}
                />
                <Form.Text className="text-muted">
                  {AddEventString.descriptionLabel}
                </Form.Text>
              </Form.Group>
              <Row xs="auto">
                <Col>
                  <Link to="/home" state={{ details: trailInfo.details }}>
                    <Button
                      className="btn-sm"
                      variant="outline-success"
                      onClick={() => {
                        createUpdate();
                      }}
                    >
                      {AddEventString.save}
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <Link
                    to="/information"
                    state={{ details: trailInfo.details }}
                  >
                    <Button className="btn-sm" variant="outline-danger">
                      {AddEventString.cancel}
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <div>
        <h4>{AddEventString.lookup}</h4>
      </div>
      <div>{InformationContainerTemplate(type, description, timeValue)}</div>
    </Col>
  );
}
