import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  review_response: "",
  video_details: {},
  view_count:""
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
export const videoReviewPost = createAsyncThunk(
  "videoreview",
  async (body, { rejectWithValue }) => {
    try {
      const data = await axios.post(
        process.env.NEXT_PUBLIC_THEWEEDOC_ADD_VIDEOREVIEW,
        { user_id: 2, video_id: 1, review: "good" },
        header
      );
      console.log(data.status);
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

export const getVideoDetails = createAsyncThunk(
  "videodetails",
  async (body, { rejectWithValue }) => {
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
      return data;
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
        { user_id: 3, video_id: 1},
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
  reducers: {},
  extraReducers: {
    [videoReviewPost.pending]: (state, action) => {
      state.review_response = "Loading...";
    },
    [videoReviewPost.fulfilled]: (state, { payload }) => {
      state.review_response = payload?.data.message;
      console.log("redppp", payload?.data.message);
    },
    [videoReviewPost.rejected]: (state, { payload }) => {
      console.log("redrejected ", payload);
      state.review_response = "Error While posting";
    },
    [getVideoDetails.pending]: (state, action) => {},
    [getVideoDetails.fulfilled]: (state, { payload }) => {
      state.video_details = payload?.data.data;
      console.log("redpppkishore", payload?.data.data);
    },
    [postVideoViewsCount.pending]: (state, action) => {},
    [postVideoViewsCount.fulfilled]: (state, { payload }) => {
      state.view_count = payload?.message;
      console.log("Views Count", state.view_count);
    },
  },
});
// export const {setEmail,userData,increseFollowCount,decreaseFollowCount,cleanState}= videoSlice.actions
export default videoSlice.reducer;
console.log("initialstateFF", initialState);
