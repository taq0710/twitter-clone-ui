import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, put, takeEvery } from "redux-saga/effects";
import {
  getPosts,
  getPostsSuccess,
  getPostsFailure,
  addPost,
  addPostFailure,
  addPostSuccess,
  editPost,
  editPostFailure,
  editPostSuccess,
  removePost,
  removePostFailure,
  removePostSuccess,
} from "./postSlide";
import { Post } from "interfaces";
import factories from "./factories";
function* handleGetPost() {
  yield takeEvery(getPosts.type, function* (action: PayloadAction<Post>) {
    try {
      const response: any = yield call(factories.getPost, action.payload);
      yield put(getPostsSuccess(response.data.data.data));
    } catch (error: any) {
      yield put(getPostsFailure(error.message));
    }
  });
}

function* handleAddPost() {
  yield takeEvery(addPost.type, function* (payload: PayloadAction<Post>) {
    try {
      const response: any = yield call(factories.addPost, payload.payload);
      yield put(addPostSuccess(response.data.data));
    } catch (error: any) {
      yield put(addPostFailure(error.message));
    }
  });
}

function* handleEditPost() {
  yield takeEvery(editPost.type, function* (payload: PayloadAction<string>) {
    try {
      const response: any = yield call(factories.editPost, payload.payload);
      yield put(editPostSuccess(response));
    } catch (error: any) {
      yield put(editPostFailure(error.message));
    }
  });
}

function* handleRemovePost() {
  yield takeEvery(removePost.type, function* (action: PayloadAction<string>) {
    try {
      const response: any = yield call(factories.removePost, action.payload);
      yield put(removePostSuccess(response));
    } catch (error: any) {
      yield put(removePostFailure(error.message));
    }
  });
}

export default function* postSaga() {
  yield fork(handleGetPost);
  yield fork(handleAddPost);
  yield fork(handleEditPost);
  yield fork(handleRemovePost);
}
