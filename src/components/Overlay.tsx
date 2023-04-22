import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Placement } from "react-bootstrap/esm/types";

export function OverlayElement(
  position: Placement,
  label: string,
  key: string,
  children: any
): JSX.Element {
  return (
    <OverlayTrigger
      key={key}
      placement={position}
      overlay={
        <Tooltip id={`tooltip-${position}`}>
          <strong>{label}</strong>
        </Tooltip>
      }
    >
      {children}
    </OverlayTrigger>
  );
}
