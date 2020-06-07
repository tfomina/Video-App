import { APP_ACTIONS } from "../constants";
import { Timestamp } from "../../types";

const loadTimestamps = () => ({
  type: APP_ACTIONS.LOAD_TIMESTAMPS,
});

const loadTimestampsSuccess = (payload: { timestamps: Timestamp[] }) => ({
  type: APP_ACTIONS.LOAD_TIMESTAMPS_SUCCESS,
  payload,
});

const loadTimestampsError = () => ({
  type: APP_ACTIONS.LOAD_TIMESTAMPS_ERROR,
});

const selectTimestamp = (payload: { selectedTimestamp: Timestamp }) => ({
  type: APP_ACTIONS.SELECT_TIMESTAMP,
  payload,
});

const sortTimestamps = () => ({
  type: APP_ACTIONS.SORT_TIMESTAMPS,
});

export {
  selectTimestamp,
  loadTimestamps,
  loadTimestampsSuccess,
  loadTimestampsError,
  sortTimestamps,
};
