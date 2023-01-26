import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const userState=   {
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
  pSocialLinks: ["https://www.instagram.com/imdb/",
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
    user:userState,
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
        },
        userData:(state,action)=>{
          state.user = userState
        },
        increseFollowCount:(state,action)=>{
          state.user.data.pFollowCount=state.user.data.pFollowCount+1
        },
        decreaseFollowCount:(state,action)=>{
          state.user.data.pFollowCount=state.user.data.pFollowCount-1
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
export const {setEmail,userData,increseFollowCount,decreaseFollowCount}= userAuthSlice.actions
export default userAuthSlice.reducer