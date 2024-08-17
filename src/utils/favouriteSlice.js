import { createSlice } from "@reduxjs/toolkit";

const FavouriteSlice=createSlice({
    name:"favourite",
    initialState:{
        liked:[],
        watchLater:[],
    },
    reducers:{
        addWatchLater:(state,action)=>{
            state.watchLater.push(action.payload)
        },
        removeWatchLater:(state,action)=>{
            state.watchLater=state.watchLater.filter((item)=>item.id!==action.payload)
        },
        addLikedVideos:(state,action)=>{
            state.liked.push(action.payload)
        },
        removeLiked:(state,action)=>{
            state.liked= state.liked.filter((item)=>item.id!==action.payload)
        }
    }
})
export const{addWatchLater,addLikedVideos,removeLiked,removeWatchLater}=FavouriteSlice.actions

export default FavouriteSlice.reducer