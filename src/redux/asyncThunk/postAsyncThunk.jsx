import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../constants/redux.constant";
import { postService } from "../services/post.services";

export const postAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.POST,
  async (payload, { rejectWithValues }) => {
    console.log(payload, "...payload from post");

    try {
      const response = await postService(payload);
      return response;
    } catch (error) {
      return rejectWithValues;
    }
  }
);
