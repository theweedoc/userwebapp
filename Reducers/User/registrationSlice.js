import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
    user:"",
    isLoggedIn:false,
    token:"",
    email:"test",
    loading:false,
    username:"",
    msg:"",
    userreg_email:"",
    registeration_response:false,
    otp_msg:"",
    otp_success:false

}

export const RegistrationUserAuth = createAsyncThunk("register",async (body,{rejectWithValue})=>{
    console.log(body);
  try{
    const {data} =  await axios.post(process.env.NEXT_PUBLIC_THEWEEDOC_SIGNUP,body)
    console.log("axios working",JSON.stringify(body))
    console.log("REGDATA",data)
    if (!data.status===200) {
      return rejectWithValue(response.status)
  }
  console.log("res",data.status)
    return await data

  }
  catch(error){
    rejectWithValue(error.response.data)

  }
})
//

export const RegistrationOTPAuth = createAsyncThunk("register",async (body,{rejectWithValue})=>{
  console.log(body);
try{
  const {data} =  await axios.post(process.env.NEXT_PUBLIC_THEWEEDOC_POST_VERIFY_OTP,body)
  console.log("axios working",JSON.stringify(body))
  console.log("REGDATA",data)
  if (!data.status===200) {
    return rejectWithValue(response.status)
}
console.log("res",data.status)
  return await data

}
catch(error){
  rejectWithValue(error.response.data)

}
})






const regAuthSlice = createSlice({
    name:"registerAuth",
    initialState,
    reducers:{
        setEmail:(state,action)=>{
            state.email=action.payload
        }
    },
    extraReducers:{
      [RegistrationUserAuth.pending]:(state,action)=>{
        state.loading=true
      },
      [RegistrationUserAuth.fulfilled]:(state,{payload})=>{
        state.registeration_response=true
        state.msg=payload.message
        state.username=payload.data.userName
        state.loading=false
        
       
      },
      [RegistrationUserAuth.rejected]:(state,action)=>{
      },
      [RegistrationOTPAuth.fulfilled]:(state,{payload})=>{
        state.registeration_response=true
          state.otp_msg = payload
          state.otp_success=true

      
       
      },
      [RegistrationOTPAuth.rejected]:(state,action)=>{
        console.log("Action",action)

      }
        
    }
})
//RegistrationOTPAuth
export const {setEmail}= regAuthSlice.actions
export default regAuthSlice.reducer