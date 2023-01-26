import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
    user:"",
    isLoggedIn:false,
    token:"",
    email:"test",
    loading:false
}

export const LoginUserAuth = createAsyncThunk("user",async (body,{rejectWithValue})=>{
    console.log("axios call");
  try{
    const {data} =  await axios.post("https://localhost:5000/login",JSON.stringify(body))
    console.log("axios working",JSON.stringify(body))
    return await data

  }
  catch(error){
    rejectWithValue(error.response.data)

  }
})

const userAuthSlice = createSlice({
    name:"userAuth",
    initialState,
    reducers:{
        setEmail:(state,action)=>{
            state.email=action.payload
        }
    },
    extraReducers:{
      [LoginUserAuth.pending]:(state,action)=>{
        state.loading=true
      },
      [LoginUserAuth.fulfilled]:(state,action)=>{
        state.loading=false
      },
      [LoginUserAuth.rejected]:(state,action)=>{
        state.loading=true
      }
        
    }
})
export const {setEmail}= userAuthSlice.actions
export default userAuthSlice.reducer