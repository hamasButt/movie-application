import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import MovieApi from "../../common/api/MovieApi";
import apiKey from "../../common/api/MovieApiKey";


const fetchAsyncShows = createAsyncThunk('fetchAsyncShows/createAsyncThunk', async () => {
    const seriesText = 'Friends'
    const response = await MovieApi.get(`?apikey=${apiKey}&s=${seriesText}&type=series`)
        .catch((err) => {
            console.log('error', err)
        })
    return response.data
})


const initialState = {
    shows: {}
}
const ShowsSlice = createSlice({
    name: 'shows', initialState, reducers: {
        addShows: (state, {payload}) => {
            state.shows = payload
        }
    },
    extraReducers: {
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log('Fetching Shows Successful');
            return {
                ...state,
                shows: payload
            }
        }
    }
})


// export const {addShows} = showsSlice.actions;
export {fetchAsyncShows};
export const getAllShows = (state) => state.shows.shows
export default ShowsSlice.reducer
