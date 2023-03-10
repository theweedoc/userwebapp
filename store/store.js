import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import UserReducer from '../Reducers/User/loginSlice'
import userAuthSlice from "../Reducers/User/loginSlice"
import regAuthSlice from "../Reducers/User/registrationSlice";
import userSlice from "../Reducers/User/userSlice";
import VideoSlice from "../Reducers/Video/VideoSlice";

const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
    profileData: userSlice,
    videoData: VideoSlice,
    registrationData: regAuthSlice
  }, middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp', 'payload.headers', 'payload.config.transformRequest.0'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
})


export default store
