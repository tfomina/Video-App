import { APP_ACTIONS } from "../constants";
import { Timestamp } from "../../types";

const selectTimestampAction = (payload: { selectedTimestamp: Timestamp }) => ({
  type: APP_ACTIONS.SELECT_TIMESTAMP,
  payload,
});

export { selectTimestampAction };
