import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";

const store=configureStore({
    reducer:{
        user:userSlice,
        movies:movieSlice
    }
})
export default store