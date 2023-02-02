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

}

export const RegistrationUserAuth = createAsyncThunk("register",async (body,{rejectWithValue})=>{
    console.log("axios call");
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
        state.msg=payload.message
        state.username=payload.data.userName
        state.loading=false
      },
      [RegistrationUserAuth.rejected]:(state,action)=>{
        state.loading=true
      }
        
    }
})
export const {setEmail}= regAuthSlice.actions
export default regAuthSlice.reducer