import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { toast } from "react-toastify";
import { apis } from "../../Services/api";

const initialState = {
  user: "",
  isLoggedIn: false,
  token: "",
  email: "",
  loading: false,
  username: "",
  msg: "",
  userreg_email: "",
  registeration_response: false,
  otp_msg: "",
  otp_success: false,
  isOtpVerified: false,
  errors: {},
  isError: false
}

export const RegistrationUserAuth = createAsyncThunk("register", async (body, { fulfillWithValue, rejectWithValue }) => {
  console.log("RegistrationUserAuth--", body);
  try {
    const registerResponse = await axios.post(apis.signupAPI, body)
    console.log("axios working", JSON.stringify(body))
    console.log("REGDATA--", registerResponse)
    if (registerResponse.status !== 200) {
      console.log("REGDATA--", registerResponse)
      return rejectWithValue(registerResponse)
    }
    console.log("registerResponse success--", registerResponse?.data?.message)
    toast(registerResponse?.data?.message, { hideProgressBar: true, autoClose: 2000, type: "success" });
    console.log("res--", registerResponse.status)
    return fulfillWithValue(registerResponse)
  }
  catch (error) {
    // debugger
    console.log("REGDATA ERROR", error)
    console.log("err alert--", error?.response?.data?.message || error?.message || error);
    toast(error?.response?.data?.message || error?.message || error, { hideProgressBar: true, autoClose: 2000, type: "error" });
    return rejectWithValue(error.response.data)
  }
})

export const RegistrationOTPAuth = createAsyncThunk("otpverify", async (body, { fulfillWithValue, rejectWithValue }) => {
  console.log("RegistrationOTPAuth--", body);
  try {
    const data = await axios.post(apis.verifyOtp, body);
    console.log("res", data)
    if (data.status !== 200) {
      return rejectWithValue(data)
    }
    toast(data?.data?.message || data?.message || data, { hideProgressBar: true, autoClose: 2000, type: "success" });
    return fulfillWithValue(data)
  }
  catch (error) {
    console.log("RegistrationOTPAuth error--", error);
    if (error) {
      toast(error?.response?.data?.message || error?.data?.message || error?.message || error, { hideProgressBar: true, autoClose: 2000, type: "error" });
    }
    return rejectWithValue(error)
  }
})

export const logout = createAsyncThunk("logout", async (body, { fulfillWithValue, rejectWithValue }) => {
  console.log("RegistrationOTPAuth--", body);
  try {
    return fulfillWithValue(true)
  }
  catch (error) {
    // return rejectWithValue(error)
  }
})

const regAuthSlice = createSlice({
  name: "registerAuth",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload
    }
  },
  extraReducers: {
    [RegistrationUserAuth.pending]: (state, action) => {
      state.loading = true
    },
    [RegistrationUserAuth.fulfilled]: (state, { payload }) => {
      // debugger
      console.log("registration payload--", payload);
      state.registeration_response = true
      state.loading = false
      state.isRegistereed = true
      state.isError = false
    },
    [RegistrationUserAuth.rejected]: (state, { payload }) => {
      // debugger
      state.loading = false
      state.isRegistereed = false
      console.log("errpayload", payload)
      if (payload?.errors && Object.keys(payload.errors).length) {
        Object.assign(state.errors, { ...payload.errors })
      }
      state.isError = true
    },

    // OTP
    [RegistrationOTPAuth.pending]: (state, action) => {
      state.loading = true
      state.otp_success = false
    },
    [RegistrationOTPAuth.fulfilled]: (state, { payload }) => {
      // debugger
      state.loading = false
      state.registeration_response = true
      state.otp_msg = payload
      state.otp_success = true
      state.isOtpVerified = true
    },
    [RegistrationOTPAuth.rejected]: (state, action) => {
      console.log("Action", action)
      state.registeration_response = false
      state.otp_msg = action.payload
      state.otp_success = false
      state.isOtpVerified = false
      state.loading = false
    },
    [logout.fulfilled]: (state, action) => {
      // state = { ...initialState }
    }
  }
})
//RegistrationOTPAuth
export const { setEmail } = regAuthSlice.actions
export default regAuthSlice.reducer