import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Navbar } from "../components/Navbar";
import { TrailsItem } from "../components/TrailsItem";
import { db } from "../config/config";
import { collection, getDocs } from "firebase/firestore";
import { TrailsItemProps } from "../models/trailItemProps.model";
import { Warning } from "../models/warning.model";
import React from "react";

export function Home() {
  const trailsCollectionRef = collection(db, "Trails");
  const warningsCollectionRef = collection(db, "Warnings");
  const [finalTrails, setFinalTrails] = React.useState<TrailsItemProps[]>([]);

  let tempTrails: TrailsItemProps[] = [];

  useEffect(() => {
    const getTrails = async () => {
      const data = await getDocs(trailsCollectionRef);
      const warningData = await getDocs(warningsCollectionRef);
      let warningsFB: Warning[];
      let tempList: any[];
      let tempWarnings: any[];

      tempList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      tempWarnings = warningData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      if (tempList !== undefined) {
        tempTrails = tempList.map((trail: TrailsItemProps) => trail);
        for (let counter: number = 0; counter < tempTrails.length; counter++) {
          if (tempTrails[counter].warnings?.length === undefined) {
            tempTrails[counter].warnings = [];
          }
        }

        warningsFB = tempWarnings.map((warning: Warning) => warning);
        for (let i = 0; i < tempTrails.length; i++) {
          for (let j = 0; j < warningsFB.length; j++) {
            if (tempTrails[i].name === warningsFB[j].name) {
              tempTrails[i].warnings?.push(warningsFB[j]);
            }
          }
        }
        setFinalTrails(tempTrails);
      }
    };

    getTrails();
  }, []);
  return (
    <div>
      <Navbar />
      <Row md={2} xs={1} lg={3} className="g-3 mt-2">
        {finalTrails.map((item, index) => (
          <Col key={index}>
            <TrailsItem trialID={0} {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
