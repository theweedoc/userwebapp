import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  review_response: "",
  reviewed_success: false,
  video_details: {},
  view_count: "",
};
let token;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token");
}
let header = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ` + token,
  },
};
console.log(header);
export const videoLikeDislike = createAsyncThunk(
  "videoLikeDislike",
  async (body, { fulfillWithValue, rejectWithValue }) => {
    try {
      const data = await axios.post(
        process.env.NEXT_PUBLIC_THEWEEDOC_POST_VIDEO_LIKE_DISLIKE,
        { video_id: 1, status: body },
        header
      );
      console.log(data.status);
      if (!data.status === 200) {
        console.log(response);
        return rejectWithValue(response.status);
      }
      console.log("res", data.status);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(response);

      return rejectWithValue(error.response);
    }
  }
);

export const videoReviewPost = createAsyncThunk(
  "videoreview",

  async (body, { fulfillWithValue, rejectWithValue }) => {
    try {
      let header = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const data = await axios.post(
        process.env.NEXT_PUBLIC_THEWEEDOC_ADD_VIDEOREVIEW,
        { user_id: 2, video_id: 1, review: body },
        header
      );
      console.log(data.status);
      if (!data.status === 200) {
        console.log(response);
        return rejectWithValue(response.status);
      }
      console.log("res", data.status);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(response);

      return rejectWithValue(error.response);
    }
  }
);

export const getVideoDetails = createAsyncThunk(
  "videodetails",
  async (body, { fulfillWithValue, rejectWithValue }) => {
    try {
      const data = await axios.get(
        process.env.NEXT_PUBLIC_THEWEEDOC_GET_VIDEO_DETAILS,
        header
      );
      console.log(data);
      if (!data.status === 200) {
        console.log(response);
        return rejectWithValue(response.status);
      }
      console.log("response for video", data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(response);

      return rejectWithValue(error.response);
    }
  }
);
export const postVideoViewsCount = createAsyncThunk(
  "videoviews",
  async (body, { rejectWithValue }) => {
    try {
      const data = await axios.post(
        process.env.NEXT_PUBLIC_THEWEEDOC_POST_VIDEO_VIEW_COUNT,
        { user_id: 3, video_id: 1 },
        header
      );
      console.log(data);
      if (!data.status === 200) {
        console.log(response);
        return rejectWithValue(response.status);
      }
      console.log("res", data.status);
      return data;
    } catch (error) {
      console.log(response);

      return rejectWithValue(error.response);
    }
  }
);
const videoSlice = createSlice({
  name: "videoAuth",
  initialState,
  reducers: {
    getReview: (state) => {
      return state.review_response;
    },
  },
  extraReducers(builder) {
    builder.addCase(videoReviewPost.pending, (state, { payload }) => {
      state.review_response = "Loading...";
    }),
      builder.addCase(videoReviewPost.fulfilled, (state, { payload }) => {
        state.reviewed_success = true;
        state.review_response = payload?.data.message;
        console.log("review_response 1", payload?.data.message);
      }),
      builder.addCase(videoReviewPost.rejected, (state, { payload }) => {
        console.log("redrejected ", payload);
        state.review_response = "Error While posting";
      }),
      builder.addCase(getVideoDetails.pending, (state, action) => {}),
      builder.addCase(getVideoDetails.fulfilled, (state, { payload }) => {
        state.video_details = payload?.data.data;
        console.log("redpppkishore", payload?.data.data);
      }),
      builder.addCase(postVideoViewsCount.pending, (state, action) => {}),
      builder.addCase(postVideoViewsCount.fulfilled, (state, { payload }) => {
        state.view_count = payload?.message;
        console.log("Views Count", state.view_count);
      }),
      builder.addCase(videoLikeDislike.fulfilled, (stata, { payload }) => {
        console.log("LIKE", payload);
      });
  },
});
export const { getReview } = videoSlice.actions;
export default videoSlice.reducer;
console.log("initialstateFF", initialState);
