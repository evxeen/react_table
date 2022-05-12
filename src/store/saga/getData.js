import axios from "axios";
import { takeEvery, put, call } from "redux-saga/effects";
import { setDataAction } from "../actions/dataActions";
import { GET_DATA } from "../types";

const fetchDataJson = () =>
  axios.get("https://jsonplaceholder.typicode.com/posts");

function* dataWorker() {
  const { data } = yield call(fetchDataJson);
  yield put(setDataAction(data));
}

export function* dataWatcher() {
  yield takeEvery(GET_DATA, dataWorker);
}
