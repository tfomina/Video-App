import { combineReducers } from "redux";

import { timestampsReducer } from "./timestampsReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  timestamps: timestampsReducer,
  app: appReducer,
});
