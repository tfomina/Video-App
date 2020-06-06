import { APP_ACTIONS } from "../constants";

const showLoaderAction = () => ({
  type: APP_ACTIONS.SHOW_LOADER,
});

const hideLoaderAction = () => ({
  type: APP_ACTIONS.HIDE_LOADER,
});

export { showLoaderAction, hideLoaderAction };
