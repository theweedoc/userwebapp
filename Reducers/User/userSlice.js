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
 
  "https://image.tmdb.org/t/p/w500//kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
  "https://image.tmdb.org/t/p/w500//sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
 "https://image.tmdb.org/t/p/w500//1XSYOP0JjjyMz1irihvWywro82r.jpg",
  "https://image.tmdb.org/t/p/w500//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
  "https://image.tmdb.org/t/p/w500//iCvgemXf2Kpr2LvpDmt5J9NhjKM.jpg"
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

export const profileData = createAsyncThunk("user",async (body,{rejectWithValue})=>{
    console.log("axios call");
  try{
    const {data} =  await axios.post("https://localhost:5000/",JSON.stringify(body))
    console.log("axios working",JSON.stringify(body))
    return await data

  }
  catch(error){
    rejectWithValue(error.response.data)

  }
})

const profileDataSlice = createSlice({
    name:"profileData",
    initialState,
    reducers:{     
        setUserData:(state,action)=>{
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
        
    }
})
export const {setUserData}= profileDataSlice.actions
export default profileDataSlice.reducer