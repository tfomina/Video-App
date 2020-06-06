import { Timestamp, TimestampsState } from "../../types";
import { APP_ACTIONS } from "./../constants";
import { compareTimestamps } from "../../utils";

const initialState = {
  timestamps: [],
  selectedTimestamp: null,
};

export const timestampsReducer = (
  state: TimestampsState = initialState,
  action: any
) => {
  switch (action.type) {
    case APP_ACTIONS.SELECT_TIMESTAMP: {
      const { selectedTimestamp } = action.payload;
      return {
        ...state,
        selectedTimestamp,
      };
    }

    case APP_ACTIONS.LOAD_TIMESTAMPS: {
      const { timestamps } = action.payload;
      return {
        ...state,
        timestamps: timestamps.sort(compareTimestamps),
      };
    }

    default:
      return state;
  }
};
