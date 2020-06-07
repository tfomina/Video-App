import { Timestamp, TimestampsState, Sort } from "../../types";
import { APP_ACTIONS } from "./../constants";
import { compareTimestamps } from "../../utils";

type LoadTimestampsAction = {
  type: typeof APP_ACTIONS.LOAD_TIMESTAMPS;
};

type LoadTimestampsSuccessAction = {
  type: typeof APP_ACTIONS.LOAD_TIMESTAMPS_SUCCESS;
  payload: { timestamps: Timestamp[] };
};

type LoadTimestampsErrorAction = {
  type: typeof APP_ACTIONS.LOAD_TIMESTAMPS_ERROR;
};

type SortTimestampsAction = {
  type: typeof APP_ACTIONS.SORT_TIMESTAMPS;
};

type SelectTimestampAction = {
  type: typeof APP_ACTIONS.SELECT_TIMESTAMP;
  payload: { selectedTimestamp: Timestamp };
};

type Action =
  | LoadTimestampsAction
  | LoadTimestampsSuccessAction
  | LoadTimestampsErrorAction
  | SortTimestampsAction
  | SelectTimestampAction;

const initialState = {
  timestamps: [],
  selectedTimestamp: null,
  sort: "asc" as Sort,
};

export const timestampsReducer = (
  state: TimestampsState = initialState,
  action: Action
): TimestampsState => {
  switch (action.type) {
    case APP_ACTIONS.LOAD_TIMESTAMPS: {
      return state;
    }

    case APP_ACTIONS.LOAD_TIMESTAMPS_SUCCESS: {
      const { timestamps } = (action as LoadTimestampsSuccessAction).payload;
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

    case APP_ACTIONS.SELECT_TIMESTAMP: {
      const { selectedTimestamp } = (action as SelectTimestampAction).payload;
      return {
        ...state,
        selectedTimestamp,
      };
    }

    default:
      return state;
  }
};
