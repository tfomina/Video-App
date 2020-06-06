import axios from "axios";
import { Dispatch } from "redux";
import { APP_ACTIONS } from "../constants";
import { Timestamp } from "../../types";
import { showLoaderAction, hideLoaderAction } from "./app";

const URL = "http://www.mocky.io/v2/5e60c5f53300005fcc97bbdd";

const loadTimestampsAction = () => {
  return async (dispatch: Dispatch) => {
    dispatch(showLoaderAction());
    try {
      const result = await axios(URL);
      const timestamps = result.data || [];
      dispatch({
        type: APP_ACTIONS.LOAD_TIMESTAMPS,
        payload: { timestamps },
      });
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(hideLoaderAction());
    }
  };
};

const selectTimestampAction = (payload: { selectedTimestamp: Timestamp }) => ({
  type: APP_ACTIONS.SELECT_TIMESTAMP,
  payload,
});

const sortTimestampsAction = () => ({
  type: APP_ACTIONS.SORT_TIMESTAMPS,
});

export { selectTimestampAction, loadTimestampsAction, sortTimestampsAction };
