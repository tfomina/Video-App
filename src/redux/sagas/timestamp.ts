import { call, put, takeEvery } from "redux-saga/effects";
import * as api from "../../api";
import { showLoader, hideLoader } from "../actions/app";
import {
  loadTimestampsSuccess,
  loadTimestampsError,
} from "../actions/timestamps";

import { APP_ACTIONS } from "./../constants";

function* loadTimestampsHandler() {
  yield put(showLoader());

  try {
    const result = yield call(api.loadTimestamps);
    const timestamps = result.data || [];
    yield put(loadTimestampsSuccess({ timestamps }));
  } catch (e) {
    yield put(loadTimestampsError());
  } finally {
    yield put(hideLoader());
  }
}
export function* watchLoadTimestamps() {
  yield takeEvery(APP_ACTIONS.LOAD_TIMESTAMPS, loadTimestampsHandler);
}
