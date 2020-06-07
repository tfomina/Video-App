import { VideoState } from "../../types";
import { APP_ACTIONS } from "./../constants";

type SetCurrentTimeAction = {
  type: typeof APP_ACTIONS.SET_CURRENT_TIME;
  payload: { currentTime: number };
};

type GetCurrentTimeAction = {
  type: typeof APP_ACTIONS.GET_CURRENT_TIME;
};

type Action = SetCurrentTimeAction | GetCurrentTimeAction;

const initialState = {
  currentTime: 0,
};

export const videoReducer = (
  state: VideoState = initialState,
  action: Action
): VideoState => {
  switch (action.type) {
    case APP_ACTIONS.SET_CURRENT_TIME: {
      const { currentTime } = (action as SetCurrentTimeAction).payload;
      return {
        ...state,
        currentTime,
      };
    }

    case APP_ACTIONS.GET_CURRENT_TIME: {
      return state;
    }

    default:
      return state;
  }
};
