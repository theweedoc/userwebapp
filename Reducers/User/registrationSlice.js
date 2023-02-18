import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { apis } from "../../Services/api";
const initialState = {
  user: "",
  isLoggedIn: false,
  token: "",
  email: "test",
  loading: false,
  username: "",
  msg: "",
  userreg_email: "",
  registeration_response: false,
  otp_msg: "",
  otp_success: false,
  isOtpVerified: false,
  errors: [],
  isError: false
}

export const RegistrationUserAuth = createAsyncThunk("register", async (body, { rejectWithValue }) => {
  console.log(body);
  try {
    const { data } = await axios.post(apis.signupAPI, body)
    console.log("axios working", JSON.stringify(body))
    console.log("REGDATA", data)
    if (!data.status === 200) {
      console.log("REGDATA", data)

      return rejectWithValue(data)
    }
    console.log("res", data.status)
    return await data

  }
  catch (error) {
    console.log("REGDATA ERROR", data)

    rejectWithValue(error.response.data)

  }
})
//

export const RegistrationOTPAuth = createAsyncThunk("otpverify", async (body, { fulfillWithValue, rejectWithValue }) => {
  console.log(body);
  try {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_THEWEEDOC_POST_VERIFY_OTP, body)
    if (!data.status === 200) {
      return rejectWithValue(response.status)
    }
    console.log("res", data.status)
    return fulfillWithValue(data)

  }
  catch (error) {
    rejectWithValue(error.response.data)

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
      state.registeration_response = true
      state.loading = false
      state.isRegistereed = true


    },
    [RegistrationUserAuth.rejected]: (state, action) => {
      state.loading = false
      state.isRegistereed = false
      console.log("errpayload", action)
      //state.errors.push(payload?.errors)
      state.isError = true
    },
    [RegistrationOTPAuth.pending]: (state, action) => {
      state.loading = true
      state.otp_success = false
    },
    [RegistrationOTPAuth.fulfilled]: (state, { payload }) => {
      state.registeration_response = true
      state.otp_msg = payload
      state.otp_success = true
      state.isOtpVerified = true
      state.loading = false




    },
    [RegistrationOTPAuth.rejected]: (state, action) => {
      console.log("Action", action)

    }

  }
})
//RegistrationOTPAuth
export const { setEmail } = regAuthSlice.actions
export default regAuthSlice.reducer