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
  action: any // TODO ТИПИЗАЦИЯ
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
      return state;
    }

    case APP_ACTIONS.LOAD_TIMESTAMPS_SUCCESS: {
      const { timestamps } = action.payload;
      return {
        ...state,
        timestamps: timestamps.sort(compareTimestamps),
      };
    }

    case APP_ACTIONS.LOAD_TIMESTAMPS_ERROR: {
      return {
        ...state,
        timestamps: [],
      };
    }

    case APP_ACTIONS.SORT_TIMESTAMPS: {
      return {
        ...state,
        sort: state.sort === "asc" ? "desc" : "asc",
        timestamps: [...state.timestamps.reverse()],
      };
    }

    default:
      return state;
  }
};
