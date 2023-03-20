import { PayloadAction } from "@reduxjs/toolkit";
import { ILogin } from "interfaces";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import factories from "./factories";

import { loginHome, loginHomeFailure, loginHomeSuccess } from "./loginSlide";
function* handleLogin() {
  yield takeEvery(loginHome.type, function* (payload: PayloadAction<ILogin>) {
    try {
      const response: any = yield call(() =>
        factories.requestLogin(payload.payload)
      );
      if (response.data.success) {
        localStorage.setItem("token", response.data.data.token);
        yield put({
          type: loginHomeSuccess.type,
          payload: response.data.data,
        });
      } else {
        yield put({
          type: loginHomeFailure.type,
          payload: response.data.message,
        });
      }
    } catch (error) {
      yield put({
        type: loginHomeFailure.type,
        // error
      });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(handleLogin)]);
}
