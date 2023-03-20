import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Post } from "interfaces";

interface PostState {
  posts: Post[];
  status: "nothing" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  status: "nothing",
  error: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts(state) {
      state.status = "loading";
    },
    getPostsSuccess(state, action) {
      state.status = "succeeded";
      state.posts = action.payload;
    },
    getPostsFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    addPost: (state: Draft<PostState>, action: PayloadAction<Post>) => {
      state.status = "loading";
    },
    addPostSuccess: (state: Draft<PostState>, action: PayloadAction<Post>) => {
      state.status = "succeeded";
      state.posts.push(action.payload);
    },
    addPostFailure: (
      state: Draft<PostState>,
      action: PayloadAction<string>
    ) => {
      state.status = "failed";
      state.error = action.payload;
    },
    editPost: (state: Draft<PostState>, action: PayloadAction<Post>) => {
      state.status = "loading";
    },
    editPostSuccess: (state: Draft<PostState>, action: PayloadAction<Post>) => {
      state.status = "succeeded";
      const editedPost = action.payload;
      const existingPost = state.posts.find(
        (post) => post._id === editedPost._id
      );
      if (existingPost) {
        Object.assign(existingPost, editedPost);
      }
    },
    editPostFailure: (
      state: Draft<PostState>,
      action: PayloadAction<string>
    ) => {
      state.status = "failed";
      state.error = action.payload;
    },
    removePost: (state: Draft<PostState>, action: PayloadAction<number>) => {
      state.status = "loading";
    },
    removePostSuccess: (
      state: Draft<PostState>,
      action: PayloadAction<any>
    ) => {
      state.status = "succeeded";
      const removePostId = action.payload;
      state.posts = [
        ...state.posts.filter((post) => post._id !== removePostId._id),
      ];
    },
    removePostFailure: (
      state: Draft<PostState>,
      action: PayloadAction<string>
    ) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
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
} = postSlice.actions;

export const selectAllPosts = (state: RootState) => state.post.posts;

export default postSlice.reducer;
