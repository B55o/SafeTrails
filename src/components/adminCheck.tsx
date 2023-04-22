import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/config";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { OverlayElement } from "./Overlay";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AdminCheckString } from "../models/enums/strings/adminCheckStrings";

const updateWarning = async (id: any) => {
  const userDoc = doc(db, "Warnings", id);
  const newField = { approve: true };
  await updateDoc(userDoc, newField);
};

const deleteWarning = async (id: any) => {
  const userDoc = doc(db, "Warnings", id);
  await deleteDoc(userDoc);
};

export function adminCheck(
  uid: string | null,
  el: any,
  warningId: string
): JSX.Element | null {
  if (uid == "htiWnaNWlwR0pckR5updazTAXPK2" && el === undefined) {
    return (
      <Row>
        <Col className="col-auto">
          <Link to="/home">
            <Button
              className="btn-sm mb-1 mt-1"
              variant="outline-success"
              onClick={() => {
                updateWarning(warningId);
              }}
            >
              {AdminCheckString.apply}
            </Button>
          </Link>
        </Col>
        <Col className="col-auto">
          <Link to="/home">
            <Button
              className="btn-sm mb-1 mt-1"
              variant="outline-danger"
              onClick={() => {
                deleteWarning(warningId);
              }}
            >
              {AdminCheckString.delete}
            </Button>
          </Link>
        </Col>
      </Row>
    );
  } else if (el === true) {
    return (
      <div className="mb-1">
        {OverlayElement(
          "top",
          `${AdminCheckString.approved}`,
          `${AdminCheckString.approved}`,
          <CheckCircleRoundedIcon color="success" />
        )}
      </div>
    );
  } else {
    return (
      <div className="mb-1">
        {OverlayElement(
          "top",
          `${AdminCheckString.notApproved}`,
          `${AdminCheckString.notApproved}`,
          <HelpRoundedIcon color="warning" />
        )}
      </div>
    );
  }
}
