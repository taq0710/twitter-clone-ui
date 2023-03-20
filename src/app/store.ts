import { configureStore } from '@reduxjs/toolkit';
import loginReducer from 'features/login/loginSlide';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import postsReducer from 'features/post/postSlide'

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    login:loginReducer,
    post: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }).concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch