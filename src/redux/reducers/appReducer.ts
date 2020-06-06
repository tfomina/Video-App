import { AppState } from "../../types";
import { APP_ACTIONS } from "./../constants";

const initialState = {
  loading: false,
};

export const appReducer = (state: AppState = initialState, action: any) => {
  switch (action.type) {
    case APP_ACTIONS.SHOW_LOADER: {
      return {
        ...state,
        loading: true,
      };
    }

    case APP_ACTIONS.HIDE_LOADER: {
      return {
        ...state,
        loading: false,
      };
    }

    default:
      return state;
  }
};
