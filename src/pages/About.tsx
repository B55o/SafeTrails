import { useState } from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import { NavbarShort } from "../components/NavbarShort";
import avalanche from "./../assets/images/avalanche.png";
import brain from "./../assets/images/brain.png";
import vision from "./../assets/images/vision.png";
import sign from "./../assets/images/sign.png";
import tourists from "./../assets/images/map.png";
import tourist from "./../assets/images/tourist.png";
import trip from "./../assets/images/trip.png";
import { AboutString } from "../models/enums/strings/aboutStrings";
import { divForCarousel } from "../components/helpers/divForCarousel";

export function About() {
  const [index, setIndex] = useState(0);
  const divStyle: string = "d-flex justify-content-center";

  const handleSelect = (
    selectedIndex: React.SetStateAction<number>,
    e: any
  ) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className={divStyle}>
        <NavbarShort />
      </div>
      <div className="mb-4 mt-3 ">
        <Col>
          <Row>
            <div className={divStyle}></div>
          </Row>
          <Row>
            <div className="d-flex justify-content-center mt-2">
              <h1>Uwaga!</h1>
            </div>
          </Row>
          <Row>
            <div>
              <h4>{AboutString.main}</h4>
            </div>
          </Row>
        </Col>
      </div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="w-100 carousel-dark slide"
      >
        <Carousel.Item>
          {divForCarousel(brain, AboutString.brain)}
        </Carousel.Item>
        <Carousel.Item>
          {divForCarousel(avalanche, AboutString.avalanche)}
        </Carousel.Item>
        <Carousel.Item>
          {divForCarousel(vision, AboutString.vision)}
        </Carousel.Item>
        <Carousel.Item>
          {divForCarousel(
            sign,
            AboutString.sign,
            "d-flex justify-content-center w-100"
          )}
        </Carousel.Item>
      </Carousel>
      <Row className={divStyle}>
        <Col className={divStyle}>
          <div>
            <img src={tourists} height="230px" />
          </div>
        </Col>
        <Col className={divStyle}>
          <div>
            <img src={trip} height="230px" />
          </div>
        </Col>
        <Col className={divStyle}>
          <div>
            <img src={tourist} height="230px" />
          </div>
        </Col>
      </Row>
    </>
  );
}
