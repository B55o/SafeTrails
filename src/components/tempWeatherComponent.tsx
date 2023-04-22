import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { TrailsItemProps } from "../models/trailItemProps.model";
import { Weather } from "../models/weather.model";
import { Chart } from "./chart";
import { AssetsManager } from "./helpers/assetManager";
import { weatherDto, WeatherOutDaily } from "./helpers/dto";
import { timeFormat } from "./helpers/timeFormatter";
import { sectionItem, sectionTitle } from "./weatherLayout";
import { TWCString } from "../models/enums/strings/tempWeatherComponentString";

export function TempWeatherCard(
  trail: TrailsItemProps
): JSX.Element | undefined {

  const assets: AssetsManager = new AssetsManager();
  let weatherOD: WeatherOutDaily[] = [];
  const weatherApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=49.2184&longitude=19.9458&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,snowfall_sum,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&timezone=Europe%2FBerlin`;

  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState<Weather>();

  const getWeather = () => {
    setLoading(true);
    axios
      .get(weatherApiUrl)
      .then((res) => {
        setLoading(false);
        setWeather(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        return null;
      });
  };
  useEffect(() => {
    getWeather();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>{TWCString.loading}</h1>
      </div>
    );
  }

  if (weather !== undefined) {
    let timeToDisplay;
    if (weather.daily !== undefined) {
      timeToDisplay = timeFormat(weather.daily.time);
    }
    weatherOD = weatherDto(weather);

    
    return (
      <Row className="mt-4">
        <Col>
          <Card
            className="shadow p-3"
            style={{ width: "21rem", height: "34rem" }}
          >
            <Card.Header>
              <div className="d-flex justify-content-center">{trail.name}</div>
              <div className="d-flex justify-content-between">
                <div>
                  <Col>
                    <Button
                      className="btn-sm"
                      variant="outline-secondary"
                      onClick={() => {
                        if (current > 0) {
                          setCurrent(current - 1);
                        } else {
                          setCurrent(current);
                        }
                      }}
                    >
                      -
                    </Button>
                  </Col>
                </div>
                <div>
                  <Col>{weatherOD[current].time}</Col>
                </div>
                <div>
                  <Col>
                    <Button
                      className="btn-sm"
                      variant="outline-secondary"
                      onClick={() => {
                        if (current < 6) {
                          setCurrent(current + 1);
                        } else {
                          setCurrent(current);
                        }
                      }}
                    >
                      +
                    </Button>
                  </Col>
                </div>
              </div>
            </Card.Header>
            <Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  {sectionTitle(assets.Icons.sunsetSunrise)}
                  {sectionItem("Wschód", weatherOD[current].sunrise.slice(11))}
                  {sectionItem("Zachód", weatherOD[current].sunset.slice(11))}
                </ListGroup.Item>
                <ListGroup.Item>
                  {sectionTitle(assets.Icons.temperature)}
                  {sectionItem(
                    "Temperatura maks",
                    weatherOD[current].temperature_2m_max,
                    weather.daily_units?.temperature_2m_max
                  )}
                  {sectionItem(
                    "Temperatura min",
                    weatherOD[current].temperature_2m_min,
                    weather.daily_units?.temperature_2m_min
                  )}
                </ListGroup.Item>
                <ListGroup.Item>
                  {sectionTitle(assets.Icons.rain)}
                  {sectionItem(
                    "Deszcz",
                    +weatherOD[current].rain_sum,
                    weather.daily_units?.rain_sum
                  )}
                  {sectionItem(
                    "Śnieg",
                    +weatherOD[current].snowfall_sum,
                    weather.daily_units?.snowfall_sum
                  )}
                </ListGroup.Item>
                <ListGroup.Item>
                  {sectionTitle(assets.Icons.wind)}
                  {sectionItem(
                    "prędkośc",
                    +weatherOD[current].windspeed_10m_max,
                    weather.daily_units?.windspeed_10m_max
                  )}
                  {sectionItem(
                    "porywy",
                    +weatherOD[current].windgusts_10m_max,
                    weather.daily_units?.windgusts_10m_max
                  )}
                  {sectionItem(
                    "kierunek",
                    weatherOD[current].winddirection_10m_dominant,
                    weather.daily_units?.winddirection_10m_dominant
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "25rem" }} className="mb-4 shadow-sm">
            <Card.Header>
            {TWCString.temperature} [{weather.daily_units?.temperature_2m_max}]
            </Card.Header>
            <Card.Body>
              {Chart(
                timeToDisplay,
                weather.daily?.temperature_2m_max,
                "max temp",
                weather.daily?.temperature_2m_min,
                "min temp"
              )}
            </Card.Body>
          </Card>
          <Card style={{ width: "25rem" }} className="shadow-sm">
            <Card.Header>
            {TWCString.snow} [{weather.daily_units?.snowfall_sum}]
            </Card.Header>
            <Card.Body>
              {Chart(timeToDisplay, weather.daily?.snowfall_sum, "snowfall")}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "25rem" }} className="mb-4 shadow-sm">
            <Card.Header>
            {TWCString.wind} [{weather.daily_units?.windspeed_10m_max}]
            </Card.Header>
            <Card.Body>
              {Chart(
                timeToDisplay,
                weather.daily?.windspeed_10m_max,
                "max wind",
                weather.daily?.windgusts_10m_max,
                "wind gusts"
              )}
            </Card.Body>
          </Card>
          <Card style={{ width: "25rem" }} className="shadow-sm">
            <Card.Header>{TWCString.rain} [{weather.daily_units?.rain_sum}]</Card.Header>
            <Card.Body>
              {Chart(timeToDisplay, weather.daily?.rain_sum, "rainfall")}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}
