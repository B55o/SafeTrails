import { borderStyles } from "../../models/enums/borderStyle";
import { strings } from "../../models/enums/types";

export function selectType(type: string) {
  let finalStyle: string = "shadow-sm mb-3 alert border-secondary";
  let classStyle: string = "shadow-sm mb-3 alert border-";

  switch (type) {
    case strings.warning:
      finalStyle = classStyle + borderStyles.warning;
      break;
    case strings.danger:
      finalStyle = classStyle + borderStyles.danger;
      break;
    case strings.information:
      finalStyle = classStyle + borderStyles.info;
      break;
  }
  return finalStyle;
}
