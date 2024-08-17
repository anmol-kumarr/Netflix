import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popular: null,
        upcoming:null,
        trending:null,
        topRated:null
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
            state.upcoming=action.payload
        },
        addTrending:(state,action)=>{
            state.trending=action.payload
        },
        addTopRated:(state,action)=>{
            state.topRated=action.payload
        }

    }

})
export const {
    addNowPlayingMovie,
    addTrailerVideo,
    addPopular,
    addUpcoming,
    addTrending,
    addTopRated
    
} = movieSlice.actions;


export default movieSlice.reducer