import {configureStore} from "@reduxjs/toolkit";
import MovieReducer from '../features/movies/MoviesSlice'
import ShowsSlice from "./movies/ShowsSlice";

const Store = configureStore({
    reducer: {
        movies: MovieReducer,
        shows: ShowsSlice
    }
})

export default Store
