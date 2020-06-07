import { APP_ACTIONS } from "../constants";

const setCurrentTime = (payload: { currentTime: number }) => ({
  type: APP_ACTIONS.SET_CURRENT_TIME,
  payload,
});

const getCurrentTime = () => ({
  type: APP_ACTIONS.GET_CURRENT_TIME,
});

export { setCurrentTime, getCurrentTime };
