import { combineReducers } from "@reduxjs/toolkit";
import postSlice from "../slices/post.slice";
export default combineReducers({
  post: postSlice,
});
