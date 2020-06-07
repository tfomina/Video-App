import { APP_ACTIONS } from "../constants";

const showLoader = () => ({
  type: APP_ACTIONS.SHOW_LOADER,
});

const hideLoader = () => ({
  type: APP_ACTIONS.HIDE_LOADER,
});

export { showLoader, hideLoader };
