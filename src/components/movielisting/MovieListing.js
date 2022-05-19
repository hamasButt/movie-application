import React from 'react'
import {useSelector} from "react-redux";
import {getAllMovies} from "../../features/movies/MoviesSlice";
import MovieCards from "../moviecards/MovieCards";
import './movielisting.css'
import {getAllShows} from "../../features/movies/ShowsSlice";

const MovieListing = () => {
    const movies = useSelector(getAllMovies)
    const shows = useSelector(getAllShows)


    let renderMovies = ""
    renderMovies = movies.Response === "True"
        ?
        (movies.Search.map((movie, i) => (
            <MovieCards key={i} data={movie}/>)
        ))
        : (<div className="movie-error"><h3>{movies.Error}</h3></div>)

    let renderShows = ""
    renderShows = shows.Response === 'True'
        ?
        (shows.Search.map((show, i) => {
            return <MovieCards key={i} data={show}/>
        }))
        :
        (<div className="show-error">{shows.Error}</div>)


    return (<div className="movie-wrapper">
        <div className="movie-list">
            <h2>Movies</h2>
            <div className="movie-container">
                {renderMovies}
            </div>
        </div>
        <div className="show-list">
            <h2>Shows</h2>
            <div className="show-container">
                {renderShows}
            </div>
        </div>
    </div>)
}


export default MovieListing
