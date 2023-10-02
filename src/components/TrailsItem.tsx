import { Button, Card, Col, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./../assets/CSS/components/TrailsItem.style.css";
import peak from "./../../public/assets/images/koscielec.jpg";
import peakTrail from "./../../public/assets/images/koscielec-szlak1.png";
import { TrailsItemProps } from "../models/trailItemProps.model";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { TrailsItemString } from "../models/enums/strings/trailsItemStrings";
import "./../assets/CSS/components/TrailsItem.style.css";
import { useState } from "react";

export function TrailsItem(trail: TrailsItemProps): JSX.Element {
  const peakFromName: string = `https://www.google.com/maps/place/${trail.name}/data=!3m1!1e3`;
  const globalWeatherFromName: string = `https://www.ventusky.com/?p=49.218;19.946;10&l=snow&w=fast`;
  const toprUrl: string = "https://pogoda.topr.pl/";
  const lawinyToprUrl: string = "https://lawiny.topr.pl/";
  let warningBtnText: string = "";

  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (trail.warnings !== undefined) {
    if (trail.warnings?.length === 1) {
      warningBtnText = "dodane zdarzenie";
    } else if (trail.warnings?.length <= 4 && trail.warnings?.length > 1) {
      warningBtnText = "dodane zdarzenia";
    } else {
      warningBtnText = "dodanych zdarzeń";
    }
  }

  let trailWarningsLength: number;
  if (trail.warnings != undefined) {
    trailWarningsLength = trail.warnings.length;
  } else {
    trailWarningsLength = 0;
  }

  return (
    <div className="ti-trail-container">
      <div className="ti-image-wrapper">
        <img className="ti-first-image" src={trail.trailImgUrl} loading="lazy"/>
        <img className="ti-second-image" src={trail.trailSecImgUrl}/>
      </div>
      <div className="ti-elements-wrapper">
        <div className="ti-description">
          <span className="ti-text">
            {trail.name} - {trail.height}
          </span>
        </div>
        <div className="ti-column1">
          <Link
            to="/Information"
            state={{ details: trail }}
            className="ti-b link-underline"
          >
            <Button
              className="btn-sm justify-content-center"
              variant="outline-secondary"
            >
              {trail.warnings?.length}
              {"   "}
              {warningBtnText}
            </Button>
          </Link>
        </div>

        <div className="ti-column1">
          <Link
            to="/Description"
            state={{ details: trail }}
            className="ti-b link-underline"
          >
            <Button
              className="btn-sm justify-content-around"
              variant="outline-secondary"
            >
              {TrailsItemString.information}
            </Button>
          </Link>
        </div>
        <div className="ti-column1">
          <div className="ti-b">
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {TrailsItemString.sites}
              </button>

              <ul
                className={`dropdown-menu dropdown-menu-end w-100 ${
                  dropdownOpen ? "show" : ""
                }`}
                style={{ minWidth: "100%", width: "auto" }}
              >
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() =>
                      window.open(peakFromName, "_blank", "noopener,noreferrer")
                    }
                  >
                    {TrailsItemString.googleMaps}
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() =>
                      window.open(
                        globalWeatherFromName,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    {TrailsItemString.ventusky}
                  </button>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() =>
                      window.open(toprUrl, "_blank", "noopener,noreferrer")
                    }
                  >
                    {TrailsItemString.toprCams}
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() =>
                      window.open(
                        lawinyToprUrl,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    {TrailsItemString.toprAvalanches}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
