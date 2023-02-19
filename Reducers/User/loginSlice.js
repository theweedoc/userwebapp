import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { toast } from "react-toastify";
import { apis } from "../../Services/api";

const userState = {
  message: "success",
  code: 200,
  data: {
    pId: 12,
    pName: "Mohamed Isak",
    uName: "insta_killer_choko",
    pFollowCount: 22,
    pFollowerCount: 12,
    pImage: "https://w7.pngwing.com/pngs/613/636/png-transparent-computer-icons-user-profile-male-avatar-avatar-heroes-logo-black-thumbnail.png",
    isCreator: true,
    pSocialLinks: [
      "https://www.instagram.com/imdb/",
      "https://www.facebook.com/imdb",
      "https://twitter.com/IMDb"
    ],
    posters: [
      "url"
    ],
    video: [
      "url",
      "url"
    ],
    ads: [
      "url"
    ]
  }
}

const initialState = {
  user: userState,
  isLoggedIn: false,
  token: "",
  email: "test",
  loading: false,
  msg: "",
  status: "",
  invalidCred: "",
  username: ""
}

export const LoginUserAuth = createAsyncThunk("user", async (body, { fulfillWithValue, rejectWithValue }) => {
  console.log("body--", body);
  try {
    const data = await axios.post(apis.loginAPI, body)
    console.log("data--", data)
    if (data.status !== 200) {
      console.log("res--", data.status)
      alert("User not exists!")
      return rejectWithValue(response.status)
    }
    console.log("res--", data.status)
    return fulfillWithValue(data)
  }
  catch (error) {
    console.log("error--", error);
    console.log("response--", error?.response?.data?.message || error?.message || error);
    // alert("User not exists or something went wrong!")
    toast(error?.response?.data?.message || error?.message || error, { hideProgressBar: true, autoClose: 2000, type: "error" });
    return rejectWithValue(error?.response?.data?.message || error?.message || error)
  }
})

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    userData: (state, action) => {
      state.email = action.payload
    },
    cleanState: (state, action) => {
      state.invalidCred = false
      state.loading = false
    },
    userData: (state, action) => {
      state.user = userState
    },
    increseFollowCount: (state, action) => {
      state.user.data.pFollowCount = state.user.data.pFollowCount + 1
    },
    decreaseFollowCount: (state, action) => {
      state.user.data.pFollowCount = state.user.data.pFollowCount - 1
    }
  },
  extraReducers(builder) {
    builder.addCase(LoginUserAuth.pending, (state, action) => {
      state.loading = true
    }),
      builder.addCase(LoginUserAuth.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true
        state.msg = payload?.message
        state.username = payload?.data.userName
        state.token = payload?.data.token
        localStorage.setItem("token", state.token)
        state.loading = false
      }),
      builder.addCase(LoginUserAuth.rejected, (state, { payload }) => {
        console.log("red", payload)
        state.msg = payload?.data?.msg ? payload.data.msg : "next"
        state.invalidCred = true
        state.loading = false
      })
  }
})
export const { setEmail, userData, increseFollowCount, decreaseFollowCount, cleanState } = userAuthSlice.actions
export default userAuthSlice.reducer
