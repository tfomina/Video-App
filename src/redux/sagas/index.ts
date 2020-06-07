import { all } from "redux-saga/effects";

import * as timestampSagas from "./timestamp";

export default function* rootSaga() {
  yield all([timestampSagas.watchLoadTimestamps()]);
}
