import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
    user:"",
    isLoggedIn:false,
    token:"",
    email:"test",
    loading:false
}

export const RegistrationUserAuth = createAsyncThunk("user",async (body,{rejectWithValue})=>{
    console.log("axios call");
  try{
    const {data} =  await axios.post(process.env.NEXT_PUBLIC_THEWEEDOC_SIGNUP,JSON.stringify(body))
    console.log("axios working",JSON.stringify(body))
    console.log("REGDATA",data)
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
      [RegistrationUserAuth.fulfilled]:(state,action)=>{
        state.loading=false
      },
      [RegistrationUserAuth.rejected]:(state,action)=>{
        state.loading=true
      }
        
    }
})
export const {setEmail}= regAuthSlice.actions
export default regAuthSlice.reducer