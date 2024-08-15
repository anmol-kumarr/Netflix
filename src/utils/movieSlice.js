import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popular: null,
        upcoming:null
    },
    reducers: {
        addNowPlayingMovie: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        addPopular: (state, action) => {
            state.popular = action.payload
        },
        addUpcoming:(state,action)=>{
            state.upcoming=state.action.payload
        }

    }

})
export const {
    addNowPlayingMovie,
    addTrailerVideo,
    addPopular,
    addUpcoming
    
} = movieSlice.actions;


export default movieSlice.reducer