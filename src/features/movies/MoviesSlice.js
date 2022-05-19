import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import MovieApi from "../../common/api/MovieApi";
import apiKey from "../../common/api/MovieApiKey";

const movieText = 'Harry'
const fetchAsyncMovies = createAsyncThunk('fetchAsyncMovies/createAsyncThunk', async () => {
    const response = await MovieApi.get(`?apikey=${apiKey}&s=${movieText}&type=movie`)
        .catch((err) => {
            console.log('error', err)
        })
    return response.data
})
const fetchAsyncMoviesOrShows = createAsyncThunk('fetchAsyncMoviesOrShows/createAsyncThunk', async (id) => {
    const response = await MovieApi.get(`?apikey=${apiKey}&i=${id}&Plot=full`)
        .catch((err) => {
            console.log('error', err)
        })
    return response.data
})

const initialState = {
    movies: {}, selectMovieOrShow: {}
}


const MoviesSlice = createSlice({
    name: 'movies', initialState, reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload
        },
        RemoveSelectedMoviesOrShows: (state) => {
            state.selectMovieOrShow = {}
        }
    }, extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('Pending');
        },

        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log('Fetching Movies Successful');
            return {
                ...state, movies: payload
            }
        }, [fetchAsyncMoviesOrShows.fulfilled]: (state, {payload}) => {
            console.log('Fetching Movies Successful');
            return {
                ...state, selectMovieOrShow: payload
            }
        }, [fetchAsyncMovies.rejected]: () => {
            console.log('Rejected');
        },
    }
})


export const { RemoveSelectedMoviesOrShows} = MoviesSlice.actions;
export {fetchAsyncMovies, fetchAsyncMoviesOrShows};
export const getAllMovies = (state) => state.movies.movies
export const getAllMoviesOrShows = (state) => state.movies.selectMovieOrShow
export default MoviesSlice.reducer
