import { AppState } from "../../types";
import { APP_ACTIONS } from "./../constants";

type ShowLoaderAction = {
  type: typeof APP_ACTIONS.SHOW_LOADER;
};

type HideLoaderAction = {
  type: typeof APP_ACTIONS.HIDE_LOADER;
};

type Action = ShowLoaderAction | HideLoaderAction;

const initialState = {
  loading: false,
};

export const appReducer = (
  state: AppState = initialState,
  action: Action
): AppState => {
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
