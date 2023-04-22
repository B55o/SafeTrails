import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { TrailsItemProps } from "../models/trailItemProps.model";

export function ControlledCarousel(trail: TrailsItemProps): JSX.Element {
  const [index, setIndex] = useState(0);

  const handleSelect = (
    selectedIndex: React.SetStateAction<number>,
    e: any
  ) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="w-100">
      <Carousel.Item>
        <div>
          <img
            className="d-block rounded w-100"
            src={trail.trailImgUrl}
            alt="First slide"
            height="600px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div>
          <img
            className="d-block rounded w-100"
            src={trail.trailSecImgUrl}
            alt="Second slide"
            height="600px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
