import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import favouriteSlice from "./favouriteSlice";

const store=configureStore({
    reducer:{
        user:userSlice,
        movies:movieSlice,
        favourite:favouriteSlice
    }
})
export default store