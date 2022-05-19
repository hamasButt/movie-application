import React, {useEffect} from 'react'
import MovieListing from "../movielisting/MovieListing";
import {useDispatch} from "react-redux";
import {fetchAsyncMovies,} from "../../features/movies/MoviesSlice";
import {fetchAsyncShows} from "../../features/movies/ShowsSlice";

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAsyncMovies())
        dispatch(fetchAsyncShows())
    }, [dispatch])

    return (
        <div>
            <div className="banner-img">
            </div>
            <MovieListing/>
        </div>
    )
}

export default Home
