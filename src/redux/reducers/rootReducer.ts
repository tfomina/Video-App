import { combineReducers } from "redux";

import { timestampsReducer } from "./timestampsReducer";
import { appReducer } from "./appReducer";
import { videoReducer } from "./videoReducer";

export const rootReducer = combineReducers({
  timestamps: timestampsReducer,
  app: appReducer,
  video: videoReducer,
});
