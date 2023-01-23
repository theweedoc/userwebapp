import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import UserReducer from '../Reducers/User/loginSlice'
import userAuthSlice from "../Reducers/User/loginSlice"

 const store = configureStore({
    reducer:{
        userAuth:userAuthSlice
    }
})


export default store
