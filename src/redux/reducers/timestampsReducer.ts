import { Timestamp, TimestampsState, Sort } from "../../types";
import { APP_ACTIONS } from "./../constants";
import { compareTimestamps } from "../../utils";

const initialState = {
  timestamps: [],
  selectedTimestamp: null,
  sort: "asc" as Sort,
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

    case APP_ACTIONS.SORT_TIMESTAMPS: {
      const sort = state.sort === "asc" ? "desc" : "asc";
      return {
        ...state,
        sort,
        timestamps: [
          ...state.timestamps.sort((a, b) => compareTimestamps(a, b, sort)),
        ],
      };
    }

    default:
      return state;
  }
};
