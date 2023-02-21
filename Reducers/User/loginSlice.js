import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { Router } from "next/router";
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
        isOtpVerified: false,

        pFollowerCount: 12,
        pImage:
            "https://w7.pngwing.com/pngs/613/636/png-transparent-computer-icons-user-profile-male-avatar-avatar-heroes-logo-black-thumbnail.png",
        isCreator: true,
        pSocialLinks: [
            "https://www.instagram.com/imdb/",
            "https://www.facebook.com/imdb",
            "https://twitter.com/IMDb",
        ],
        posters: ["url"],
        video: ["url", "url"],
        ads: ["url"],
    },
};

const initialState = {
    user: userState,
    isLoggedIn: false,
    token: "",
    email: "test",
    loading: false,
    email_loading: false,
    msg: "",
    status: "",
    invalidCred: "",
    username: "",
    forgot_pass_email: "",
    email_verification: false,
    otp_verification: false,
    otp_response: "",
    reset_response: "",
    resetpass_failed: false,
    forgotpass: false,
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
export const LoginUserAuth = createAsyncThunk(
    "user",
    async (body, { fulfillWithValue, rejectWithValue }) => {
        try {
            const data = await axios.post(apis.loginAPI, body)
            console.log(data.status);
            if (!data.status === 200) {
                return rejectWithValue(response.status);
            }
            console.log("res", data.status);
            return fulfillWithValue(data);
        } catch (error) {
            if (error?.response?.status === 401) {
                return rejectWithValue(error.response);
            }
            toast(error?.response?.data?.message || error?.message || error, { hideProgressBar: true, autoClose: 2000, type: "error" });
            return rejectWithValue(error)

        }
    }
);




export const ForgotPassAuth = createAsyncThunk(
    "ForgotPassAuth",
    async (body, { fulfillWithValue, rejectWithValue }) => {
        try {
            const data = await axios.post(
                process.env.NEXT_PUBLIC_THEWEEDOC_POST_FORGOT_PASS,
                body,
                header
            );
            console.log(data.status);
            if (!data.status === 200) {
                return rejectWithValue(response.status);
            }
            toast(data?.data?.message, {
                hideProgressBar: true,
                autoClose: 2000,
                type: "success",
            });

            return fulfillWithValue(data);
        } catch (error) {
            toast(error?.response?.data?.message, {
                hideProgressBar: true,
                autoClose: 2000,
                type: "error",
            });
            return rejectWithValue(error.response);
        }
    }
);
export const ResetPassAuth = createAsyncThunk(
    "ResetPassAuth",
    async (body, { fulfillWithValue, rejectWithValue }) => {
        try {
            const data = await axios.post(
                process.env.NEXT_PUBLIC_THEWEEDOC_POST_RESET_PASS,
                body,
                header
            );
            console.log(data.status);
            if (!data.status === 200) {
                return rejectWithValue(response.status);
            }
            console.log("res", data.status);
            toast(data?.data?.message, {
                hideProgressBar: true,
                autoClose: 2000,
                type: "success",
            });
            return fulfillWithValue(data);
        } catch (error) {
            toast(error?.response?.data?.message, {
                hideProgressBar: true,
                autoClose: 2000,
                type: "error",
            });
            return rejectWithValue(error.response);
        }
    }
);

const userAuthSlice = createSlice({
    name: "userAuth",
    initialState,
    reducers: {
        userData: (state, action) => {
            state.email = action.payload;
        },
        cleanState: (state, action) => {
            state.invalidCred = false;
            state.loading = false;
        },
        userData: (state, action) => {
            state.user = userState;
        },
        increseFollowCount: (state, action) => {
            state.user.data.pFollowCount = state.user.data.pFollowCount + 1;
        },
        decreaseFollowCount: (state, action) => {
            state.user.data.pFollowCount = state.user.data.pFollowCount - 1;
        },
        setForgotPassEmail: (state, action) => {
            state.forgot_pass_email = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(LoginUserAuth.pending, (state, action) => {
            state.loading = true;
        }),
            builder.addCase(LoginUserAuth.fulfilled, (state, { payload }) => {
                state.isLoggedIn = true;
                state.msg = payload?.message;
                state.username = payload?.data.userName;
                state.token = payload?.data.token;
                state.isOtpVerified = true

                localStorage.setItem("token", state.token);
                state.loading = false;
            }),
            builder.addCase(LoginUserAuth.rejected, (state, { payload }) => {
                console.log("red", payload);
                state.msg = payload.data.msg;
                state.invalidCred = true;
                state.loading = false;
                if (payload.response.status === 401) {

                    state.isOtpVerified = false
                }

                state.msg = payload?.data?.msg ? payload.data.msg : "next"
                state.invalidCred = true
                state.loading = false

            }),
            builder.addCase(ForgotPassAuth.pending, (state, { payload }) => {
                (state.email_verification = false),
                    (state.email_loading = true),
                    (state.forgotpass = false);
            }),
            builder.addCase(ForgotPassAuth.fulfilled, (state, { payload }) => {
                state.otp_response = payload?.data?.message;
                state.email_loading = false
                if (state.otp_response === "No user found") {
                    state.email_verification = false;
                } else {
                    state.email_verification = true;
                }
            }),
            builder.addCase(ForgotPassAuth.rejected, (state, { payload }) => {
                state.email_verification = false;
                state.email_loading = false;
            }),
            builder.addCase(ResetPassAuth.pending, (state, { payload }) => {
                (state.otp_verification = false), (state.forgotpass = false);
                state.resetpass_failed = false;

                state.email_loading = true;
            }),
            builder.addCase(ResetPassAuth.fulfilled, (state, { payload }) => {
                (state.email_loading = false), (state.otp_verification = true);
                state.resetpass_failed = false;

                state.reset_response = payload?.data?.message;
            }),
            builder.addCase(ResetPassAuth.rejected, (state, { payload }) => {
                state.otp_verification = false;
                state.email_loading = false;
                (state.reset_response = payload?.data?.message),
                    (state.resetpass_failed = true);
            }); //
    },
});
export const {
    setEmail,
    userData,
    increseFollowCount,
    decreaseFollowCount,
    cleanState,
    setForgotPassEmail,
} = userAuthSlice.actions;
export default userAuthSlice.reducer;
